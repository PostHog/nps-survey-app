# NPS Score App

![nps app](https://github.com/PostHog/nps-score-app/blob/fcfd601ad624addd47701416f8607dea4df5859d/screenshot.png)

This is a basic site app for [PostHog](https://posthog.com/) which displays a simple 0-10 scale for users to tell you how likely they are to recommend your product. Button presses are then logged as events in PostHog, so you conduct analysis on them and compute your Net Promoter Score (NPS). 

This app was [not made by an engineer](https://posthog.com/handbook/company/team/joe-martin), so expect some rough, ugly edges.

Thanks to @smallbrownbike @raquelmsmith @Twixes @pauldambra and @benjackwhite for various bits of advice, guidance and help. Thanks to @yakkomajuri for the initial encouragement.

### What is NPS?

[Net Promoter Score (NPS)](https://en.wikipedia.org/wiki/Net_promoter_score) is a common metric for measuring user satisfaction and indicating business growth. 

Simply put, you ask your users how likely they are to recommend your product to others, on a scale of 0 (unlikely) to 10 (likely). 

Scores are then interpreted as follows:

- **0 - 6**: Detractors. These users are unlikely to recommend your product and may damage your reputation and growth.
- **7 - 8** Passives. These users don't care about your product and are unlikely to contribute to growth.
- **9 - 10** Promoters. These users love your product and actively contribute to growth. 

Obviously, the more promoters you have, the better!

Your overall NPS score is interpreted from your collected scores using the following calculation:

`NPS = % OF PROMOTERS - % DETRACTORS`

As a result, NPS ranges from -100 to +100

### What's a good or bad NPS score?

NPS scores will range from -100 to +100. Anything above a 0 is good and means you have more promoters than passives or detractors. Anything below 0 indicates users are unhappy with your product and your growth may be in decline.

Market-leading companies generally range from +70 upwards. 

### How does this app work?
This is a very simple site app which works by simply displaying a 0-10 scale for users to indicate how likely they are to recommend your product. When a user selects a score, PostHog ingests that score as an event. You can then analyze your NPS scores in PostHog in many different ways, including:

- Using a Trends insight to analyze how scores have changed over time
- Using a correlation analysis to identify what good/bad scores correlate to
- And, of course, computing your overall NPS score

NPS scores are ingested to PostHog as 'NPS event submitted', with the score assigned to a property on the event. You can therefore easily see all your NPS scores over a period in PostHog using a breakdown. 

### How can you figure out your NPS score in PostHog?
Using [formulas](https://posthog.com/docs/product-analytics/trends#using-formulas)!

Specifically, this is the formula you need to remember: `NPS = % OF PROMOTERS - % DETRACTORS`

The resulting score is your NPS score. 

### This app needs some love!
This app has some rough edges, because it was made by a lowly marketer who had never used Typescript before. As a result, there are some things which could be done to improve it and contributions are welcome. 

Obvious ideas include:

- Integrating the app with PostHog's feature flags, so it can be targeted to certain types of users
