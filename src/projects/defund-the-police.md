---
slug: "/projects/defund-the-police"
date: "2020-08-02"
title: "What Could 'Defund the Police' Look Like?"
---
When the video of George Floyd showed a police officer kneeling on his neck for 8 minutes and 46 seconds floated around the internet, my heart sank. I couldn’t watch it for more than 30 seconds. This has been happening for years now: black people being murdered in the streets, usually by police, with practically zero repercussions for the killer(s). The list has been running on and George Floyd, Breonna Taylor, and Ahmaud Arbery are simply recent additions. I still remember being exposed to the failures of our justice system as early as 7th grade when Trayvon Martin was shot. So when people took to the streets, despite the dangers of an ongoing pandemic, and Black Lives Matter protests sparked all over the country, I knew why. It’s been long overdue.

With the BLM movement, there’s been lots of images and posters being shared about police reform, more specifically a call to defund the police. I wholeheartedly support that. But, I wasn’t really sure what defunding the police or even abolishing the police would look like. Understandably, we’ve lived with this system for so long that it is not easy to imagine what life would be like if we did not have police. In this article, we explore how the police are funded and another way we can accomplish the same goal of public safety but with the use of other workers.

It’s clear to me that there is something inherently wrong and corrupt with our current system. Cops are being protected by each other and I’ve read several stories of cops being alienated or even let go if they did not stick up for one another, no matter what wrongdoing their fellow officers commit. It’s why we’ve been seeing police officers get away with murder practically scot-free. And the worst part: cops are being paid even more.

Crime rates have been steadily decreasing since the 1990s, and yet police budgets continue to increase. However, media has convinced people that crime rate is up, since it has led to increased exposure[^1]. Coupled with politicians running on making cities safer by raising police budget, cops have continued to get more money. And it would be political suicide to run on the idea of reducing police budget, so salaries have only gone up. City spending since the 1970s, has ranged anywhere from a 1.2% to a 7.8% increase[^2]. Yet, police are somehow under trained and seemingly trigger happy.

Looking at a dataset[^3] that contains information of 911 calls, we can see how police spend some of their time. Certainly, police do not spend all of their time responding to calls, but most dangerous situations are likely called in and not simply stumbled upon. I define dangerous as an active perpetrator who is armed. Out of all the possible classifications of the 911 calls provided, here are the ones I’ve deemed as dangerous situations:

![Dangerous Police Calls](/images/police1.png)

The only grey area I have here is “EMS: ASSAULT VICTIM”. Assault victim is rather broad. The victim could have been assaulted with a blunt weapon in which case, an armed officer would be necessary. It seems, however, to also include domestic abuse cases as there wasn’t a classification for those cases. In which case, an armed officer is not necessary. For our purposes, I’m going to include all of it and just consider it a conservative estimate. It is still only 0.7% of total 911 calls. For reference, there was a total of 645,617 calls.

![Percentage of Dangerous Police Calls](/images/police2.png)

If we only need an armed police officer for 0.7% of total calls, then why are all of our cops armed?

## What A Police Force Should Do

I argue that police should, if anything, shift focus to simply responding to dangerous situations. They would be trained solely to respond to an armed perpetrator. The rest of their duties can be split up and given to other roles that are more appropriate. Police officers simply have too many responsibilities, and that’s likely why they are so undertrained. They show up to EMS/Fire related events, even just to direct traffic. But, that is not a job that only the police can do. This role could be a new job created under the DMV. It makes more sense that the DMV handles road related incidents like directing traffic and ticketing unsafe drivers. While their role may end up looking similar to what police look like right now, it’s important to keep in mind that they would not be carrying any weapon and the police job would look very different than it does now. They would also quit some of the more predatory tactics police use such as DUI checkpoints, speed traps, and ticket quotas.

It’s also important to have responders for mental health incidents and domestic abuse cases. A social worker would be very well suited to de-escalate those types of situations and get people the help that they need. With this method, we can even stop the war on drugs and instead, start giving drug addicts the medical help that they could really use. Even further, we can spend that money on funding more social programs. For example, we could pay for homeless shelters, improve unemployment agencies, and fund rehab centers. We can easily defund the police if they’re only going to be responding to a much smaller amount of calls, and move that money to help our citizens instead.

![Average Pay for Workers in PA](/images/police3.png)

Above is the average hourly wage for workers in PA. For the amount of work EMTs do, I was shocked to see their wages so low. These differences grow even larger when you consider that officers tend to work a lot of overtime so they get paid even more. The proposed 2020 public safety budget for Montgomery County, PA is $6,072,341 which is an increase of $170,165 from last year’s budget[^4]. 0.7% of the total budget is $42,506.39. That would potentially leave us with $6,029,834.61 to distribute to other occupations. Even on a larger scale, the state police for PA proposed budget is $304,400,000. It is another proposed increase in budget with the idea to keep Pennsylvanians safe[^5]. If we took out 0.7% of that total, we have $302,269,200 to spend elsewhere.

In reality, the numbers wouldn’t work out so nicely considering we can only scale down police force. Physical commodities like building costs and car maintenance don’t scale the same way. Regardless, it’s hard to imagine a politician would dare to cut down a police budget by 99% immediately. But, 0.7% is such a small number that even with all things considered, we still have a lot of room to be daring and we should not be afraid to cut down police budgets by significant amounts over the next few years.

This is, by no means, a perfect solution. There is a world where the armed police in my scenario still abuse their power and continue to target POC. All it takes is a phone call describing someone as suspicious or potentially armed. Ideally, armed officers can focus their training solely on responding to these situations and are less trigger happy, resulting in fewer cases of unnecessary deaths. But, my idea is simply a cog in the wheel. Police have been a part of the systematic racism that exists in America. Even if we abolished the police entirely, there is a larger problem at hand.

No solution is perfect, but the American people are calling for something to be done and defunding the police is a big step in the right direction.

## A Full Exploration of the Dataset

You can find the full list of all possible labels of 911 calls [here](https://github.com/jlin99/Police-Project/blob/master/charts.ipynb).

Interestingly, some of the labels seem to be repeated. Vehicle accident occurs in traffic, fire, and EMS. They each have different values, so I can only assume they are different occurrences but it’s unclear to me whether a single call just got multi-labeled and if they did, then what the criteria for multi-label is. This is what the distribution of all calls by their primary label (Traffic/Fire/EMS) looks like:

![Distribution of Calls](/images/police10.png)

Lastly, here is a geographic heatmap of 911 calls side by side with income distribution in Montgomery, PA.

![Heatmap of 911 Calls](/images/police11.png)
![Montgomery County Income Map](/images/police12.png)

Unfortunately, the income distribution map is split up even further than my heat map as I was only able to find map data split up by county. Therefore, it’s difficult to draw perfect conclusions. 911 calls are the lowest in some of the middle income ranges. 911 calls (and most likely crime) is highest in an area that has some of the richest households mixed in with some of the poorest. It is higher in some lower income areas, but not all.

[^1]: Lauren-Brooke Eisen. (March 16 2015). America’s Faulty Perception of Crime Rates. https://www.brennancenter.org/our-work/analysis-opinion/americas-faulty-perception-crime-rates

[^2]: Emily Badger and Quoctrung Bui. (June 12 2020). Cities Grew Safer. Police Budgets Kept Growing. https://www.nytimes.com/interactive/2020/06/12/upshot/cities-grew-safer-police-budgets-kept-growing.html

[^3]: https://www.kaggle.com/mchirico/montcoalert

[^4]: https://www.montcopa.org/DocumentCenter/View/26034/Proposed-2020-Budget

[^5]: https://www.budget.pa.gov/PublicationsAndReports/CommonwealthBudget/Documents/2020-21%20Proposed%20Budget/2020-21%20Budget%20in%20Brief.pdf

