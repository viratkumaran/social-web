import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { locateHostElement } from '@angular/core/src/render3/instructions';
import { AppService } from '../service/post.service';
import * as _ from "lodash";
import { Router } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Output() changed = new EventEmitter<boolean>();
  userName;
  formdata;
  postForm: boolean;
  Url: string
  imageSrc: any;
  pageId: string;
  accessToken: string;
  pop: any;
  selectedDate: any;
  headers = new HttpHeaders().set("access-control-allow-origin", '*');
  postdetail: any;
  localsrcimg: any;
  isChecked: boolean;
  sche: boolean = false
  message: string;
  socialmediadropdown: any;
  messageSuccess: boolean;

  constructor(private https: HttpClient, private service: AppService, public router: Router) {
    this.Url = 'https://graph.facebook.com/';
    this.accessToken = "EAAGEfpXqtNABAFko5E37GerGE6u2ZCTGX6Rv4kQeeTZB37ibktL3JYZAm64i6tifJ7KDiAdTZBJqyvQZBLUueTPsoNLV6ZBQYEbeamlJBhY62ZBJLQbByxQMxdlhQh6ZCZAUo5FQdkUVziEdNYFWZCE6pEZCPKK4zI79oux1ReVMs5phu5xqyZCMROwq"
    this.pageId = "104901995709038"
    //  https://graph.facebook.com/104901995709038/photos?access_token=
    //  EAAGEfpXqtNABAOxrlF7rwyZChVXwwQazHwNrx99MAJkTZBRm8YAFU3ZChLao3kZB3PTYZCzXjR8faifdIVBnhyHE7OdPOT2mNYp3oYUNP7VjjE5zWRK7pMNlikct8ZCRXXqfzZBgVr3QtbpSJtRqsk6yfIUqaf2ZCRH4KAhpENdUMuDi6HQFcxDQufhoFmGZAT9G7coAjMciRZBziog2byXBst
    //  &url=https://akm-img-a-in.tosshub.com/indiatoday/styles/photo_slider_753x543/public/images/photogallery/202004/Ajith3_IT_1587731492462.jpg?aqI_v2zLWJ1WJ84.nabpsMr92aDfceYB&message=r2

  }

  ngOnInit() {
    this.formdata = new FormGroup({
      userName: new FormControl(""),
      postName: new FormControl(""),
      describe: new FormControl(""),
      postImage: new FormControl(""),
      fileSource: new FormControl(""),
      datenow: new FormControl(""),
      timenew: new FormControl(""),
      productName: new FormControl('')
    });
    this.https.get(`${this.Url + this.pageId}/feed?access_token=` + this.accessToken + `&fields=likes,attachments,comments,created_time`)
      .subscribe((res: any) => {
        var self = this;
        this.postdetail = res.data
        var fbimage
        _.forEach(this.postdetail, function (data) {
          console.log(data, "///////");
          if (data && data.attachments) {
            _.forEach(data.attachments.data, function (value) {
              console.log(value, "?????????????");

              console.log(self, "//////////")
              self.localsrcimg.push(value)
            });
          }
          // if(data && data.attachments){
          // _.forEach(data.attachments.data, function (value) {
          //   fbimage = value.media

          //   // console.log( fbimage,"data.attachments.data");
          // });
          // }

        });
        console.log(this.localsrcimg, "data.attachments.data");

      });

    this.https.get(`${this.Url + this.pageId}?access_token=` + this.accessToken + `&fields=instagram_business_account`)
      .subscribe((res: any) => {

        var instaid = res.instagram_business_account.id
        console.log(instaid, '>>>poprio');
        this.https.get(`${this.Url + instaid}/media?access_token=` + this.accessToken + `&fields=id,media_type,media_url,username,caption,like_count,comments,timestamp`)
          .subscribe((res: any) => {
            console.log(res, "/////")
            // var instaid = res.instagram_business_account.id
            console.log(instaid, '>>>poprio');

          });

      });

  }
  createPost(e) {
    console.log(e.target.attributes.id.nodeValue)
    var postcreate = e.target.attributes.id.nodeValue
    if (postcreate == "create") {
      this.sche = false
    } else
      [
        this.sche = true
      ]
    this.postForm = true;
  }

  getFile(e) {
    console.log(e.target.files)
    let fileList: FileList = e.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      this.imageSrc = file;
    }
    this.formdata.patchValue({
      fileSource: e.target.files[0].name
    });
  }

  onClickSubmit(data) {
    console.log(this.socialmediadropdown)
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    headers.append("access-control-allow-origin", '*');
    const formData = new FormData();
    formData.append('postImage', this.imageSrc, this.imageSrc.name);
    formData.append('data', data);

    if (this.sche) {
      const dates = new Date(data.datenow);

      const timestampSeconds = Math.floor(dates.getTime() / 1000);
      console.log(timestampSeconds)
      this.formdata.patchValue({
        timenew: timestampSeconds
      });
      console.log(this.formdata.value)
      return this.https.post("http://localhost:8000/profile", formData, { headers: headers })
        .subscribe((res: any) => {
          console.log(res, '>>>res');
          this.message = "Post schedule Successfully";
          this.service.schedulePost(this.formdata.value);
          this.messageSuccess = true;

          setTimeout(() => {                           // <<<---using ()=> syntax
            this.messageSuccess = false;
          }, 2000);

        });

    }
    else {
      if (this.socialmediadropdown == "insta") {
        return this.https.post("http://localhost:8000/profile", formData, { headers: headers })
          .subscribe((res: any) => {
            console.log(res, '>>>res');
            this.message = "Post Created Successfully";
            console.log(this.message)
            this.service.createPostinsta(this.formdata.value);


          });

        // });

      }
      else if (this.socialmediadropdown == "linkedin") {
        return this.https.post("http://localhost:8000/profile", formData, { 'headers': headers })
          .subscribe((res: any) => {
            console.log(res, '>>>res');
            this.message = "Post Created Successfully";
            console.log(this.message)
            this.service.createPostLinkedIn(this.formdata.value);
          });
      } else {

        return this.https.post("http://localhost:8000/profile", formData, { headers: headers })
          .subscribe((res: any) => {
            console.log(res, '>>>res');
            this.message = "Post Created Successfully";
            console.log(this.message)
            this.service.createPost(this.formdata.value);
            this.messageSuccess = true;

            setTimeout(() => {
              this.messageSuccess = false;
            }, 2000);

          });
      }


    }



  }
  socialmediaSelect(e) {
    console.log(e.target.value, "......")
    this.socialmediadropdown = e.target.value
    this.formdata.patchValue({
      productName: this.socialmediadropdown
    });
  }

}
