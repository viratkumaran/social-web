import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
  Url: string;
  accessToken: string;
  pageId: string;

  constructor(private https: HttpClient) { 
    this.Url = 'https://graph.facebook.com/';
    this.accessToken = "EAAGEfpXqtNABAFko5E37GerGE6u2ZCTGX6Rv4kQeeTZB37ibktL3JYZAm64i6tifJ7KDiAdTZBJqyvQZBLUueTPsoNLV6ZBQYEbeamlJBhY62ZBJLQbByxQMxdlhQh6ZCZAUo5FQdkUVziEdNYFWZCE6pEZCPKK4zI79oux1ReVMs5phu5xqyZCMROwq"
    this.pageId = "104901995709038"
  }

  ngOnInit() {
    this.https.get(`${this.Url + this.pageId}/feed?access_token=` + this.accessToken + `&fields=likes,attachments,comments,created_time`)
    .subscribe((res: any) => {
      console.log(res, '>>>res');
      this.https.get(`${this.Url + this.pageId}/scheduled_posts?access_token=` + this.accessToken )
      .subscribe((res: any) => {
        console.log(res, '>>>res');
  
       
  
      });
     

    });
    this.https.get(`${this.Url + this.pageId}/tagged?access_token=` + this.accessToken)
    .subscribe((res: any) => {
      console.log(res, '>>>facebook tag');
      var self = this
      var url = this.Url
      var access = this.accessToken
      _.forEach(res.data, function (datas) {
        console.log(datas,"Lkjhgfdsaqwertyuiop")
        self.https.get(`${url + datas.id}/attachments?access_token=` + access )
      .subscribe((response: any) => {
        console.log(response, '>>>response');
  
       
  
      });
     

      })
      // this.https.get(`${this.Url + this.pageId}/scheduled_posts?access_token=` + this.accessToken )
      // .subscribe((res: any) => {
      //   console.log(res, '>>>res');
  
       
  
      // });
     

    });
    // this.https.get(`${this.Url + this.pageId}?access_token=` + this.accessToken + `&fields=instagram_business_account`)
    //   .subscribe((res: any) => {

    //     var instaid = res.instagram_business_account.id
    //     console.log(instaid, '>>>poprio');
    //     this.https.get(`${this.Url + instaid}/media?access_token=` + this.accessToken + `&fields=id,media_type,media_url,username,caption,like_count,comments,timestamp`)
    //       .subscribe((res: any) => {

    //         console.log(res, '>>>res')

    //       });

    //   });
    this.https.get(`${this.Url + this.pageId}?access_token=` + this.accessToken + `&fields=instagram_business_account`)
    .subscribe((res: any) => {

      var instaid = res.instagram_business_account.id
      console.log(instaid, '>>>poprio');
      this.https.get(`${this.Url}/ig_hashtag_search?user_id=${instaid}&q=poprio009&access_token=` + this.accessToken + `&fields=id,media_type,media_url,username,caption,like_count,comments,timestamp`)
        .subscribe((res: any) => {
          var instarecent = res.data[0].id
          this.https.get(`${this.Url + instarecent}/recent_media?user_id=${instaid}&fields=id,media_type,comments_count,like_count,media_url,caption&access_token=` + this.accessToken )
          .subscribe((res: any) => {
  
            console.log(res, '>>>kkkkkkk')
  
          });

        });

    });
  }

}
