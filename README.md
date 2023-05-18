# NPS Survey App

![nps app](https://github.com/PostHog/nps-score-app/blob/da1a061f144f8f78c1ec5072bb26bd21d1a16929/nps2.gif)

This is a basic site app for [PostHog](https://posthog.com/) which displays a simple 0-10 scale for users to tell you how likely they are to recommend your product. You can use this information to figure out your [Net Promoter Score (NPS)](https://en.wikipedia.org/wiki/Net_promoter_score)

When a user selects a score in the pop-up, PostHog records a 'NPS rating submitted' event and the score is recorded as an event property between 0 and 10. You can analyze these events in PostHog to compute your NPS using the standard formula: `NPS = % OF PROMOTERS - % DETRACTORS` 

This app was [not made by an engineer](https://posthog.com/handbook/company/team/joe-martin), so expect some rough, ugly edges. 

Thanks to [@smallbrownbike](https://github.com/smallbrownbike) [@raquelmsmith](https://github.com/raquelmsmith) [@Twixes](https://github.com/twixes) [@pauldambra](https://github.com/pauldambra) and [@benjackwhite](https://github.com/benjackwhite) for advice, guidance and help. Thanks to [@yakkomajuri](https://github.com/yakkomajuri) for the initial encouragement.

### Installation

1. Make sure you have enabled `opt_in_site_apps: true` in your posthog-js config.
2. Install the app from [the PostHog App Repository](http://posthog.com/apps).

### What is NPS?

[Net Promoter Score (NPS)](https://en.wikipedia.org/wiki/Net_promoter_score) is a common metric for measuring user satisfaction and indicating business growth. 

Simply put, you ask your users how likely they are to recommend your product to others, on a scale of 0 (unlikely) to 10 (likely). 

Scores are then interpreted as follows:

- **0 - 6**: Detractors. These users are unlikely to recommend your product and may damage your growth.
- **7 - 8** Passives. These users don't care about your product and are unlikely to contribute to growth.
- **9 - 10** Promoters. These users love your product and actively contribute to growth. 

Obviously, the more promoters you have, the better!

Your overall NPS score is interpreted from your collected scores using the following calculation:

`NPS = % OF PROMOTERS - % DETRACTORS`

As a result, NPS ranges from -100 to +100. The higher the score, the better.

### What's a good NPS score?

NPS scores will range from -100 to +100. Anything above 0 is good and means you have more promoters than passives or detractors. Anything below 0 indicates users are unhappy with your product and your growth may be in decline. Market-leading companies generally score +70 upwards. 

### How does this app work?
When a user selects a score, PostHog records their selection as a 'NPS rating submitted' event, with the score recorded as an property on the event. You can therefore easily see all your NPS scores over a period in PostHog [using a breakdown](https://posthog.com/docs/product-analytics/trends#breaking-down-by-properties). 

You can make use of your NPS scores in PostHog in many different ways, including:

- Using a Trends insight to analyze how scores have changed over time
- Using a correlation analysis to identify what good/bad scores correlate to
- And, of course, [computing your overall NPS score](#how-can-you-figure-out-your-nps-score-in-posthog)

Additionally, users can close the prompt without submitting a score, in which case no event is recorded.

### How can you figure out your NPS score in PostHog?
Using [formulas](https://posthog.com/docs/product-analytics/trends#using-formulas)!

Specifically, this is the formula you need to remember: `NPS = % OF PROMOTERS - % DETRACTORS`

The resulting score is your NPS score. 

### This app needs some love!
This app has some rough edges, because it was made by a lowly marketer who had never used Typescript before. As a result, there are some things which could be done to improve it and contributions are welcome. 

Obvious ideas include:

- Integrating the app with PostHog's feature flags, so it can be targeted to certain types of users
- Using feature flags to make it so it is only shown to users once

Find out more about [how to create your own apps for PostHog](https://posthog.com/tutorials/build-your-own-posthog-app)!


