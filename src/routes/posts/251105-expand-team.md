---
title: "We're looking for new developers!"
date: 2025-11-05
published: true
# updated: 2024-10-08
authors: ['Emily Hunt']
tags: ['developer', 'contribute', 'team', 'join']
categories: ['development-news']
description: "We'd like to expand our team to include new devs. We'd especially love to hear from you if you're a frontend developer."
thumbnail: '/assets/feed-headers/methods.png'
image: '/assets/feed-headers/methods.png'
---

For over two years, _The Astrosky Ecosystem_ has been building social tools for the astronomy community. For the past year, we've had multiple developers working on the project. **But we're looking to expand our team once again!**

Most of our work over the last year has been behind the scenes - like improving our hosting setup, developer experience, and data collection. We've also done things that are more administrative but are still huge milestones, like achieving [financial sustainability](https://opencollective.com/the-astrosky-ecosystem) through Open Collective.

In the near future, we'd like to start hosting user accounts (i.e. PDS hosting), improve the signup flow for the feeds, improve the moderation experience with a web-based UI, and even investigate ways to make the feed experience customizable for different users. There's a lot that we want to do, and we'd love to get more help across a full range of projects - from frontend work to data science and devops!

## How we work


Our team is a diverse group of astronomers, astronomy students, and professional software developers/data scientists. We meet every two weeks to have a catch-up and discuss progress.

![](/assets/posts/251105-expand-team/dev_team_nov_2025.webp)
<div style="text-align: center; margin-top: -5px"><p style="font-size: 17px"><em>Pic: A little selfie from a recent team meeting</em></p></div>


**If you're an astronomer or astronomy student**, joining our team is a fantastic way to learn about professional software development tools. We collaborate extensively with git and GitHub, and use the latest advances in Python tooling to run our project.

**If you're a software developer or data scientist**, joining our team is a great way to contribute to open source software that helps to share space content with a wider audience. Our feeds are regularly posted to by organizations like the European Space Agency, and see over 10,000 unique visitors per month.

There's no requirement on how much time you volunteer. However, onboarding developers will take up quite a bit of our own time, too - so we'd like to try and find people who are serious about helping and willing to commit a few hours a week to the project.

We'd be happy to answer any questions you might have - feel free to [DM Emily on Bluesky](https://bsky.app/profile/emily.space).

---

## 🌈 Web frontend development [high priority!]

Taking advantage of the recent addition of [OAuth Scopes](https://github.com/bluesky-social/atproto/discussions/4118) to ATProtocol/Bluesky, we'd love to migrate some of our ageing solutions (like the purely in-app [Astrobot](https://bsky.app/profile/bot.astronomy.blue) for user signup) to new web-based user interfaces. Frontend skills are the most lacking on our current team, and it would be a huge help to us to find some dedicated frontend devs who could help us out. Projects would include:

- Implementing OAuth login, tied in to our Flask backend server, for a new, multi-purpose webapp for the feeds & wider ecosystem
- Creating a new, simplified feed signup flow in the new webapp
- Creating a new moderation UI in the new webapp
- Improving our existing website's design and content
- Adding experimental options to the new webapp to allow users to have fine-grained control of their feed experience

So far, our frontend work has been with **Svelte/Sveltekit** (such as this website). Ideally, we'd like to stick to using Svelte in the future. Experience with Svelte isn't necessary (we think it's easy to learn!), but you should have frontend experience already.

We're looking for at least one frontend developer to join our team. You can apply here with [this short form](https://docs.google.com/forms/d/e/1FAIpQLScyWrWrQDfP1O5KbeLZWdYjPnIq8-1rpQQiMtXKNzMoHMSWVg/viewform?usp=publish-editor). We'll take applications on a rolling basis, but please apply by **Sunday 16th November at 23:59 UTC** for full consideration.

---

## ⚙️ Backend development (Flask, Python)

At the same time, we'll need to work on improving our backend to work with the new webapps. Most of our team is already well-versed in using Flask, but we could potentially take on ~1 additional person to work on our backend. We could also offer projects on things like increasing how much data we store from the Bluesky firehose, helping us to improve the feeds in the future.

Interested in writing fast Python code to power our feeds under the hood? You can apply here with [this short form](https://docs.google.com/forms/d/e/1FAIpQLScyWrWrQDfP1O5KbeLZWdYjPnIq8-1rpQQiMtXKNzMoHMSWVg/viewform?usp=publish-editor). We'll take applications on a rolling basis, but please apply by **Sunday 16th November at 23:59 UTC** for full consideration.

---

## 📈 Data science / text classification (Python)

Currently, all of our post feeds are chronological. Because some groups (like astrophotographers) are more numerous, it can be easy to miss posts by other users (such as research astronomers) who may post less. A long-running idea to improve our feeds would be to classify posts and users, and introduce a small amount of algorithm into the feeds to show users more posts from the types of astronomy post they prefer.

Eventually, this could also expand into automatic classification of posts into our subfeeds, and even have extensive user-customizable settings through our new web UI.

All of this would require classifying text, such as with neural networks, transformers, or unsupervised techniques - but nobody on our team has really done text classification before, and it's an area we could benefit from gaining expertise in. You could work on projects like:

- Classifying posts by type
- Classifying users based on what they post about and/or their interests
- Improving the experience of the >10,000 people who read the feeds each month
- Automated moderation tooling to help our mods
- A/B testing of user retention to see what does or doesn't work

You can apply here with [this short form](https://docs.google.com/forms/d/e/1FAIpQLScyWrWrQDfP1O5KbeLZWdYjPnIq8-1rpQQiMtXKNzMoHMSWVg/viewform?usp=publish-editor). We'll take applications on a rolling basis, but please apply by **Sunday 16th November at 23:59 UTC** for full consideration.

---

## 🚒 Devops

Finally, we would also be open to getting some devops help. To keep costs down and independence high, we host all of our services on bare metal hosting. This saves us money long-term, and prevents us from being locked in to any one cloud provider; but unfortunately, it's also something that we've had to learn as we go along, and reading up about devops stuff is a big timesink.

If you're passionate about devops and want to help an open-source project keep up high backup, development, and security standards, then we'd love to hear from you! You could work on things like...

- Improving our uptime monitoring, such as with live testing or automated alerts piped to our Discord dev server
- Helping us prepare to start hosting user data, including by adding S3-format blob storage to our repertoire of rented services
- Improving the speed and resilience of our code update rollouts

You can apply here with [this short form](https://docs.google.com/forms/d/e/1FAIpQLScyWrWrQDfP1O5KbeLZWdYjPnIq8-1rpQQiMtXKNzMoHMSWVg/viewform?usp=publish-editor). We'll take applications on a rolling basis, but please apply by **Sunday 16th November at 23:59 UTC** for full consideration.

---

## Wildcard

If you don't fit any of the above but still have an idea or thought that you'd love to work on with us, then feel free to still apply! We can't guarantee anything, but we might be able to have you join us either now or in the near future.
