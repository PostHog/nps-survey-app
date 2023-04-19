# NPS Score App

This is a basic site app which displays a simple 0-10 scale for users to tell you how likely they are to recommend your product. Button presses are then logged as events in PostHog, so you conduct analysis on them and compute your Net Promoter Score (NPS). 

This app was [not made by an engineer](https://posthog.com/handbook/company/team/joe-martin), so expect some rough edges. 

### What is NPS?

Net Promoter Score (NPS) is a common metric for measuring user satisfaction and indicating business growth. 

Simply put, you ask your users how likely they are to recommend your product to others, on a scale of 0 (unlikely) to 10 (likely). 

Scores are then interpreted as follows:

- **0 - 6**: Detractors. These users are unlikely to recommend your product and may damage your reputation and growth.
- **7 - 8** Passives. These users don't care about your product and are unlikely to contribute to growth.
- **9 - 10** Promoters. These users love your product and actively contribute to growth. 

Obviously, the more promoters you have the better!

Your overall NPS score is interpreted from your collected scores using the following calculation:

`NPS = % OF PROMOTERS - % DETRACTORS`

### What's a good or bad NPS score?

NPS scores will range from -100 to +100. Anything about a 0 is good and means you have more promoters than passives or detractors. Anything below 0 indicates users are unhappy with your product and your business may be in decline.

Market leading companies can boast very high NPS scores, generally ranging from +70 and upwards. 

### How does this app work?
This is a very simple site app which works by simply displaying a 0-10 scale for users to indicate how likely they are to recommend your product. When a user selects a score, PostHog ingests that score as an event. You can then analyze your NPS scores in PostHog in many different ways, including:

- Using a Trends insight to analyze how scores have changed over time
- Using a correlation analysis to identify what good/bad scores correlate to
- And, of course, computing your overall NPS score

### How to figure out your NPS score in PostHog?


### This app needs some love
This app has some very rough edges, because it was made by a lowly marketer who had never used Typescript before. As a result, there are some things which could be done to improve it and contributions are welcome. 

Obvious ideas include:

- Any front-end improvements to make it look better
- Making the 0-10 buttons flex, rather than appearing fixed in place
- Making the whole app disappear when a button is clicked
- Integrating the app with PostHog's feature flags, so it can be targeted to certain types of users
