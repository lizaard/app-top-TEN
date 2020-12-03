import { HttpClient } from '@angular/common/http';
import { publishFacade } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  err: string = '';

  DeacuSperSaMearga1: Lizard[] = [];
  DeacuSperSaMearga2: Lizard[] = [];
  // DeacuSperSaMearga2: Data2[] = [];
  // DeacuSperSaMearga3: Data2[] = [];
  // DeacuSperSaMearga4: Data2[] = [];
  // DeacuSperSaMearga5: Data2[] = [];



  constructor(private http: HttpClient) { }

  setValue() {
    this.err = String(this.DeacuSperSaMearga1);
  }

  ngOnInit(): void {

    this.http
      .get<Lizard>('https://www.reddit.com/r/soccer/top/.json')
      .pipe(map(postList => {
        const AiciFacUnArrayDinObiect = [];
        // console.log(AiciFacUnArrayDinObiect);
        for (const DreacuStieCeEAsta in postList) {
          if (postList.hasOwnProperty(DreacuStieCeEAsta)) {
            AiciFacUnArrayDinObiect.push(postList);
            // console.log(AiciFacUnArrayDinObiect);
          }
        }
        return AiciFacUnArrayDinObiect;
      })
      )
      .subscribe(post => {
        let postChild = post[1].data.children;
        // console.log(postChild);
        const HabarNuam = [];
        const HabarNuam2 = [];
        // const HabarNuam2 = [];
        // const HabarNuam3 = [];
        // const HabarNuam4 = [];
        // const HabarNuam5 = [];
        for(let i = 0; i < 10; i++){
          let postChildDataTwo =  postChild[i].data;
          // console.log(postChildDataTwo);

          // let upsVote = postChildDataTwo.ups;
          // let downsVote = postChildDataTwo.downs;
          // let postsTitle = postChildDataTwo.title;
          // let subredditNames = postChildDataTwo.subreddit_name_prefixed;
          // console.log(postChildDataTwo);
          // console.log(upsVote);
          HabarNuam2.push("https://www.reddit.com" + postChildDataTwo.permalink);
          HabarNuam.push(postChildDataTwo)
          // HabarNuam.push(upsVote);
          // HabarNuam.push(downsVote);
          // HabarNuam.push(postsTitle);
          // HabarNuam.push(subredditNames);
        }

          HabarNuam.push(HabarNuam2)

          this.DeacuSperSaMearga1= HabarNuam;
          console.log(HabarNuam);

          // this.DeacuSperSaMearga2= HabarNuam2;
          // this.DeacuSperSaMearga3= HabarNuam3;
          // this.DeacuSperSaMearga4= HabarNuam4;
          // this.DeacuSperSaMearga5= HabarNuam5;


        // console.log(HabarNuam);
        // console.log(HabarNuam2);
        // console.log(HabarNuam3);
        // console.log(HabarNuam4);
        // console.log(HabarNuam5);



      });

  }

}
export interface Lizard {
  title: string;
  ups: number;
  downs: number;
  permalink: Lizard2;
  subreddit_name_prefixed: string;
}

export interface Lizard2 {
  permalink: any[];
}
// export interface LinkFlairRichtext {
//   e: string;
//   t: string;
// }

// export interface MediaEmbed {
//   content: string;
//   width: number;
//   scrolling: boolean;
//   height: number;
// }

// export interface Oembed {
//   provider_url: string;
//   description: string;
//   title: string;
//   type: string;
//   thumbnail_width: number;
//   height: number;
//   width: number;
//   html: string;
//   version: string;
//   provider_name: string;
//   thumbnail_url: string;
//   thumbnail_height: number;
//   url: string;
//   author_name: string;
//   author_url: string;
//   cache_age?: number;
// }

// export interface SecureMedia {
//   type: string;
//   oembed: Oembed;
// }

// export interface SecureMediaEmbed {
//   content: string;
//   width: number;
//   scrolling: boolean;
//   media_domain_url: string;
//   height: number;
// }

// export interface AuthorFlairRichtext {
//   e: string;
//   t: string;
//   a: string;
//   u: string;
// }

// export interface Gildings {
//   gid_1: number;
// }

// export interface ResizedIcon {
//   url: string;
//   width: number;
//   height: number;
// }

// export interface ResizedStaticIcon {
//   url: string;
//   width: number;
//   height: number;
// }

// export interface AllAwarding {
//   giver_coin_reward?: number;
//   subreddit_id?: any;
//   is_new: boolean;
//   days_of_drip_extension: number;
//   coin_price: number;
//   id: string;
//   penny_donate?: number;
//   award_sub_type: string;
//   coin_reward: number;
//   icon_url: string;
//   days_of_premium: number;
//   tiers_by_required_awardings?: any;
//   resized_icons: ResizedIcon[];
//   icon_width: number;
//   static_icon_width: number;
//   start_date?: any;
//   is_enabled: boolean;
//   awardings_required_to_grant_benefits?: any;
//   description: string;
//   end_date?: any;
//   subreddit_coin_reward: number;
//   count: number;
//   static_icon_height: number;
//   name: string;
//   resized_static_icons: ResizedStaticIcon[];
//   icon_format: string;
//   icon_height: number;
//   penny_price?: number;
//   award_type: string;
//   static_icon_url: string;
// }

// export interface Oembed2 {
//   provider_url: string;
//   description: string;
//   title: string;
//   type: string;
//   thumbnail_width: number;
//   height: number;
//   width: number;
//   html: string;
//   version: string;
//   provider_name: string;
//   thumbnail_url: string;
//   thumbnail_height: number;
//   url: string;
//   author_name: string;
//   author_url: string;
//   cache_age?: number;
// }

// export interface Media {
//   type: string;
//   oembed: Oembed2;
// }

// export interface Data2 {
//   approved_at_utc?: any;
//   subreddit: string;
//   selftext: string;
//   author_fullname: string;
//   saved: boolean;
//   mod_reason_title?: any;
//   gilded: number;
//   clicked: boolean;
//   title: string;
//   link_flair_richtext: LinkFlairRichtext[];
//   subreddit_name_prefixed: string;
//   hidden: boolean;
//   pwls: number;
//   link_flair_css_class: string;
//   downs: number;
//   top_awarded_type?: any;
//   hide_score: boolean;
//   name: string;
//   quarantine: boolean;
//   link_flair_text_color: string;
//   upvote_ratio: number;
//   author_flair_background_color: string;
//   subreddit_type: string;
//   ups: number;
//   total_awards_received: number;
//   media_embed: MediaEmbed;
//   author_flair_template_id: string;
//   is_original_content: boolean;
//   user_reports: any[];
//   secure_media: SecureMedia;
//   is_reddit_media_domain: boolean;
//   is_meta: boolean;
//   category?: any;
//   secure_media_embed: SecureMediaEmbed;
//   link_flair_text: string;
//   can_mod_post: boolean;
//   score: number;
//   approved_by?: any;
//   author_premium: boolean;
//   thumbnail: string;
//   edited: any;
//   author_flair_css_class: string;
//   author_flair_richtext: AuthorFlairRichtext[];
//   gildings: Gildings;
//   content_categories?: any;
//   is_self: boolean;
//   mod_note?: any;
//   created: number;
//   link_flair_type: string;
//   wls: number;
//   removed_by_category?: any;
//   banned_by?: any;
//   author_flair_type: string;
//   domain: string;
//   allow_live_comments: boolean;
//   selftext_html: string;
//   likes?: any;
//   suggested_sort?: any;
//   banned_at_utc?: any;
//   url_overridden_by_dest: string;
//   view_count?: any;
//   archived: boolean;
//   no_follow: boolean;
//   is_crosspostable: boolean;
//   pinned: boolean;
//   over_18: boolean;
//   all_awardings: AllAwarding[];
//   awarders: any[];
//   media_only: boolean;
//   can_gild: boolean;
//   spoiler: boolean;
//   locked: boolean;
//   author_flair_text: string;
//   treatment_tags: any[];
//   visited: boolean;
//   removed_by?: any;
//   num_reports?: any;
//   distinguished?: any;
//   subreddit_id: string;
//   mod_reason_by?: any;
//   removal_reason?: any;
//   link_flair_background_color: string;
//   id: string;
//   is_robot_indexable: boolean;
//   report_reasons?: any;
//   author: string;
//   discussion_type?: any;
//   num_comments: number;
//   send_replies: boolean;
//   whitelist_status: string;
//   contest_mode: boolean;
//   mod_reports: any[];
//   author_patreon_flair: boolean;
//   author_flair_text_color: string;
//   permalink: string;
//   parent_whitelist_status: string;
//   stickied: boolean;
//   url: string;
//   subreddit_subscribers: number;
//   created_utc: number;
//   num_crossposts: number;
//   media: Media;
//   is_video: boolean;
//   link_flair_template_id: string;
// }

// export interface Child {
//   kind: string;
//   data: Data2;
// }

// export interface Data {
//   modhash: string;
//   dist: number;
//   children: Child[];
//   after: string;
//   before?: any;
// }

// export interface RootObject {
//   kind: string;
//   data: Data;
// }
