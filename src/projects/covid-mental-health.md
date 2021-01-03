---
slug: "/projects/covid-mental-health"
date: "2020-06-03"
title: "COVID's Impact on Mental Health"
---
Try out our predictive model [here](https://y1243.shinyapps.io/datafest2020app/?fbclid=IwAR1N53P7JHWs1dZRuos-ZjaTmCpMxFkS3AUoT3-izpsARLXXkZVKGY2qkkU).

Vassar hosts DataFest annually, a hackathon-like event where students are typically given a dataset and must provide some sort of analysis at the end of the 24 hours. This year, due to the COVID pandemic, DataFest was virtual and so the format changed. We were given two weeks to work on it, but no dataset was given, just a topic: COVID-19. 

I worked alongside four of my peers (Prashit Parikh, Ceci Villaseñor, Alex Eisert, Yash Patel) using the first two weeks of survey data[^1] to create a predictive mental health risk model. After being holed up for nearly two months at this point, we were all curious about the social impact quarantine is having on Americans. The survey data included a self assessment for mental health as well as questions about various topics such as economic status, education background, physical health, etc. 

We decided to combine the topics into a single score to streamline the process for users. Thus, our model asks you to rate yourself on a scale of 0-10 (0 being good, 10 being bad) in terms of aspects of your life such as social interaction, physical health, financial situation, etc. 

Survey data, of course, has its flaws. Participants are random, but it's still subject to extreme response bias. However, plotting the relation of mental health to our categories, we still find that a lot of the relationships we expect do exist.

![Relationship Between Mental Health and Features](/images/covid1.png)
![Relationship Between Mental Health and Features](/images/covid2.png)
![Relationship Between Mental Health and Features](/images/covid3.png)

Relationships such as having poor mental health having a correlation with poor physical health are to be expected since fear of catching COVID-19 is very real. Similarly, people who are in worse situations (e.g. poor economic situation, living in a densely populated are, living alone) are prone to poor mental health. There are some interesting patterns, however. Social score has a normal distribution and seems to have little to no effect. This could be attributed to the fact that some people like introverts are adjusting fine and don't mind the lack of social interaction which balances out some extroverts who might be suffering from lack of social interaction. The oldest age group seem to be the least worried when they are also the most susceptible to dying from COVID. 

Our model uses a basic linear regression to predict mental health as most of the predictors has a linear relationship with mental health. 

[^1]: https://www.covid-impact.org/