import * as React from "react"
import CreativeHeader from "./components/creativeHeader.js"
import Footer from "./components/footer.js"
import StyledFullBackground from './components/backgroundSection.js'

const mainStyle = {
    color: "#232129",
    paddingLeft: "12%",
    paddingRight: "13%",
    paddingTop: "5%",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    fontSize: "18px",
    lineHeight: "1.5",
}
const headerStyle = {
    color: "#ffa500",
    textDecoration: "underline",
}
const subheaderStyle = {
    color: "#ffa500",
    paddingTop: "3%",   
}
const sideNote = {
    fontStyle: "italic",
}

const portraitPage = () => {
    return(
        <main >
        <div>
            <CreativeHeader />
        </div>
        <StyledFullBackground>
        <div style = {mainStyle}>
            <h1 style={headerStyle}>Portrait Articles</h1>
            <p>
                Below are two articles I've written for Portrait, Vassar's Asian/Asian American magazine. The first, titled "You Are What You Eat", was featured in Portrait's very first release in Fall 2018. The follow up, "On Board the Panda Express", was written for Portrait's latest release, Fall 2020. If you are interested in seeing more from Portrait, you can read the issues <a href="https://issuu.com/vcportrait/docs">here.</a>
            </p>
            <p>
                Credits to Am Chunnananda and Ceci Villaseñor for creating the designs for the first and second article respectively.
            </p>
            <h2 style={subheaderStyle}>
                You Are What You Eat
            </h2>
            <p>
                The restaurant felt as oily as the food. It wasn’t exactly clean, but I couldn’t really call it disgusting. It just left you feeling a little dirty when you were done. I usually brought a book to read, often whatever the latest young adult fiction craze was. I would bring Percy Jackson or Katniss Everdeen or Harry Potter with me so they could distract me from the ringing bells as customers went in and out of the door and the constant sounds of frying food and yelling coming from the kitchen. My mom needed me to be babysat. Plus I came to like my aunt’s restaurant more than my mom’s store, namely because my aunt and uncle fed me. I never ate anything but General Tso’s Chicken. I would then hear my aunt or uncle yell into the kitchen: “Chuǒ-chōng giē!” Those were the first words I learned in Fujianese, my family’s local Chinese dialect. 
            </p>
            <p>
                Growing up in a family that owned several Chinese take out restaurants, I became very familiar with what it meant to be Chinese American. Chinese take out has been such an essential part of the Chinese population integrating into American society. But because Chinese food had to adapt to American tastes, the Chinese American identity had to adapt too. To be Chinese American was to be General Tso’s Chicken: not quite Chinese, but also not really American. 
            </p>
            <p>
                Chinese people first started immigrating around the 1820s, but there was not a large influx until after the Opium Wars when Britain forcefully opened up the Chinese market. Before then, China mostly kept to itself. Most immigrated to California to work on the railroads. In Chinese culture, there is a huge emphasis on family. But, Chinese families were not immigrating to America; Chinese men were. Men, the breadwinners in Chinese culture, would immigrate to America for work, but they would send money home and go back occasionally to see family. After the Chinese Exclusion Act, which cracked down on Chinese immigration, there was a decline in Chinese population in America because immigrants were forced to choose between going back to China or leaving their family behind. Eventually, the difference in gender ratios began to even out as Chinese people were forced to immigrate as a family in America and settle down in order to stay here. Around this time, America began to get its first taste of chop suey as newspapers were publishing recipes due to popular demand. The Chinese population began to open take out restaurants which was supported by the growth in Chinese families settling down in America. Chinese Americans and their take out restaurants quickly became a prominent part of American society.
            </p>
            <p>
                One of the greatest benefits of the large difference between the two cultures was that Americans couldn’t replicate the food accurately at the time, despite all of the attempts. Chinese culture rarely had cookbooks; everything was passed down through family. If white people could not communicate with Chinese immigrants, then they had no access to their cooking secrets. Unlike most European languages, Mandarin and Cantonese, the dialect spoken by most people from the Southern part of China, namely Hong Kong and the Guangdong province, had very little common ground with English. Not only is it very difficult to learn Chinese, because there is no alphabet, but instead a system that is logosyllabic, but back then, it wasn’t guaranteed that every immigrant could speak Mandarin as most came from Southeastern provinces and spoke their own local dialect instead. There are huge differences between Southeastern dialects and Mandarin so knowing one did not mean you understood the others. This helped maintain the exoticness of Chinese food since white people couldn’t start their own Chinese take out restaurants. The Chinese take out industry belonged solely to Chinese people and as more and more of the American population came to love Chinese food, there were more and more opportunities for the Chinese to settle down to make a living and integrate into American society. Thus, Chinese food gave birth to the Chinese American identity. 
            </p>
            <p>
                Despite Chinese take out being so adored by the American people, Chinese people are still discriminated against by the food we eat. Chinese people have been stereotyped to eat cats and dogs and other abnormal foods that make them disgusting in the eyes of Americans. In middle school and elementary school, I had classmates who were legitimately concerned that I or my family was eating dogs or cats. There was always a huge sigh of relief when I reassured them that no, in fact, we did not eat dogs or cats. While Chinese people are certainly more open to eating “odd” foods, these sorts of dishes are rarely eaten outside of a few provinces. The stereotypes hold little truth in terms of Chinese in America. 
            </p>
            <p>
                Regardless, Chinese Americans are scrutinized for having different cuisine. Americans are comfortable with the Chinese American cuisine that has developed, but the idea of authentic Chinese food is way out of their comfort zone. I remember people giving me looks of disgust back in elementary school when I had mentioned eating squid or mussels, not particularly weird foods. My family was big on seafood because they lived in a village by the sea with a huge fish market. Once my friends convinced me that that was weird, I became less and less adventurous with food. I started to question my parents on everything we ate. I was disgusted by the idea from eating pig tongue because that sounded even weirder. I only ever ordered General Tso’s Chicken. 
            </p>
            <p>
                General Tso’s Chicken, arguably one of the most famous Chinese take out dishes, has its roots in the Hunan province. The documentary, The Search for General Tso, explores the origin of American Chinese food with a focus on the dish, General Tso’s Chicken. The documentarists trace General Tso to Hunan. General Tso is another name for Zuo Zongtang, a famous general during the Qing Dynasty, who—surprisingly—was a real person. He was born in Hunan so there are a few things named after him, such as hotels or even foods. But there is no General Tso’s Chicken in Hunan. General Tso’s Chicken comes from a famous chef, Chef Peng Chang-kuei, who was also from Hunan. He cooked for Chiang Kai Shek, the leader of the Kuomintang (KMT). So when the KMT lost the war to the Chinese Communist Party, they were driven to Taiwan. There, Chef Peng opened up his own restaurant and he created the dish General Tso’s Chicken. It gained a lot of popularity because there were a lot of veterans in Taiwan at the time, the Hunan inspired dish felt nostalgic, and Chef Peng was a household name at the time. Another chef was so inspired by the dish, he brought it over the United States.
            </p>
            <p>
                But he changed the dish to suit an American palate. Instead of the spicy Hunan cuisine the dish resembles, the Americanized General Tso’s Chicken is too sweet, its spicy origins buried underneath layers of sugar. The traditional Chinese dish has lost its roots but it is still distinctly Chinese. Few Chinese locals have heard of General Tso’s Chicken. But in America, General Tso’s Chicken is distinctly Chinese food. Chinese Americans are put in a similar dilemma. We are disconnected from our roots. We are always foreign. In America, we are Chinese, but in China, we are American.
            </p>
            <h2 style={subheaderStyle}>Aboard the Panda Express</h2>
            <p>
                Two and a half years ago, I wrote a final essay relating my Chinese American identity to Chinese takeout cuisine. A shortened version was adapted for Portrait’s first issue, titled “You Are What You Eat.” In the essay, I talk about the history of Chinese takeout cuisine, how the food changed to meet American standards, resulting in a food that is neither Chinese nor American, and how we as Chinese Americans similarly fall in that grey area. When I was writing that essay, I felt confident in my identity—although I felt that I was in between Chinese and American, I felt that I was closer than ever to bridging that gap. I had been studying Chinese for the past 6 years and I’d had so many meaningful conversations with my mom, aunts, uncles, and grandparents. I was set to study abroad at Peking University in Beijing and it was going to solidify my Chinese language skills even further, which is what I felt was the last thing missing for me to bridge that gap. I was going to be both Chinese and American. 
            </p>
            <p>
                I am now a senior, back at Vassar College, a full year after spending five months in China. And I feel farther than ever from bridging that gap. I used to think Chinese American meant being both Chinese and American. But now, I feel that Chinese is just an adjective to describe American.
            </p>
            <p>
                When I look back, it feels very apparent that I was naive to think that language is the only barrier that is stopping me from being Chinese. American and Chinese cultures are just extremely different. While I was there, I had friends who were locals and I realized that besides the difficulty of having meaningful conversations in a second language, we were just fundamentally different. We grew up watching different TV shows. We listen to different music. We have different ideals and morals. While I enjoyed the friends I made there, it was unmistakable that I was different from them. 
            </p>
            <p>
                Even on a language level, it was clear that I was an outsider. My Chinese is obviously not perfect, but it took extended conversations for locals to realize I didn’t quite speak the same way. I’m more than happy with my level of Chinese at this point. But the biggest difference that never occurred to me was that to them I’m just American. There is no word for Chinese American in Mandarin. There is a word for Chinese diaspora. But to them, I’m just American. My parents are Chinese, but I’m American. In fairness, I was born in America. I was raised in America. I browse American sites and consume American media. I am American. 
            </p>
            <p>
                But at the same time, they don’t even recognize how hard I’ve tried to be like them and be Chinese. Each time, I get the same hand-wavey compliment that sounds something like “Wow, your Chinese is really good!” or even “You talk like a native!” that I would get at all points of my language learning career so I know they don’t mean it. And then I get asked about what it’s like to be American. 
            </p>
            <p>
                “Do you own a gun?”
                <br></br>
                “So Trump’s your president…”
                <br></br>
                “I heard you can drive before you can drink. Is that true?” 
            </p>
            <p>
                The worst is when your own family doesn’t recognize your efforts. 
            </p>
            <p>
                Growing up, I visited China often because my dad was deported when I was in 1st grade. I didn’t speak Chinese. I was treated, rightfully so, like a small American boy. They fed me burgers, soda, and fried chicken. They would order fried rice for me. They’d have me try some more traditional dishes, but a small American boy was going to choose greasy, oily delicious fatty food over it every time. And that was okay. 
            </p>
            <p>
                This time was going to be different, I told myself. They were going to recognize that I speak Chinese now. That I understand our culture better now. That I love to eat our food now. That I’m like them. 
            </p>
            <p>
                So when I spent Chinese New Year’s with them, I expected to be eating every meal with them. I expected to be eating delicious Chinese food. I expected to even eat some family recipes and traditions that belong solely to us. But, my dad took me to Burger King on the fourth or fifth day of the week-long celebration. He told me he was really craving Burger King and he’s the one driving, so who am I to say no? I oblige and we eat burgers in the car, out of fear for COVID. Afterwards, we head to my uncle’s house where my dad turns food down because we already ate burgers. 
            </p>
            <p>
                He tells them that we got burgers beforehand since today is the day we normally eat vegetarian food and he thinks I won’t want to eat that. He tells the rest of my family that we went to go eat burgers for my sake. That I wouldn’t have been able to eat a vegetarian Chinese meal. My father for some unbeknownst reason was, at least in his head, trying to protect me. The message was clear. I’m still a small American boy. 
            </p>
            <p>
                When I wrote my essay two and a half years ago, I related myself to General Tso’s Chicken. I claimed that my identity was tied to these small family owned Chinese takeout restaurants. The same kind of takeout restaurants all of my aunts and uncles owned when I was growing up where every time my family visited (which was often) they would make me, a small American boy, my favorite dish, General Tso’s Chicken. Because of this personal soft spot, I think I really wanted to be like General Tso’s Chicken. But a recent headline has helped me realize that my analogy isn’t quite correct—“Largest US Chinese Restaurant Chain Panda Express Enters China.” 
            </p>
            <p>
                I’ve never liked Panda Express. While I’m past my days of being purist about Chinese food, I find Panda Express to be overpriced and generally just worse than your local mom and pop Chinese takeout restaurant. As a Vassar student, this of course may also be tied to my hatred for capitalism and corporate in general. Regardless, Panda Express almost never crosses my mind. But when I saw that headline, I thought about it a lot because I was very interested in seeing if Panda Express would thrive in China or not. After a conversation with my girlfriend, I realized something funny. 
            </p>
            <p>
                Chinese take out food is essentially Chinese food packaged a little nicer for Americans. It’s sweeter. The meat to veggie ratio is much higher. They removed a lot of the spiciness. There’s no particularly strange ingredients to it. While it lost some of its culture, it successfully assimilated into American culture. Panda Express (and similar chains) is Chinese take out but packaged even nicer for Americans. They’re no longer dinky little mom and pop shops. They’re clean to the point where it feels almost sterile. Everything is standardized. There’s no longer a thirteen year old sitting behind the cash register doing homework. You have a significantly higher chance of interacting with employees who speak decent English. With more than 2,000 restaurants open across America, it has more than successfully assimilated into American culture. 
            </p>
            <p>
                All of this is to say that I, a child of immigrant parents from Fuzhou, China, am not equivalent to Chinese takeout restaurants, even though I grew up with it. But that’s precisely why I’m not. My parents, like Chinese takeout restaurants, had to learn to assimilate and adapt to American culture. And I am a product of that. I, like many second generation Asian Americans, am the “success story.” So when I think about Panda Express breaking into the Chinese markets, I wonder a lot about what the locals will think and how it will be received. But what I’m most curious about is how Panda Express will brand itself. How will Panda Express be marketed? Will it be known as Chinese American food? Or will it be just American?
            </p>
            <p style={sideNote}>
                Note: A few days after this essay was written, the Panda Express CEO stated that they had no plans to enter China and that the store that was reportedly opened is someone impersonating the brand.
            </p>
        </div>
        </StyledFullBackground>
        <div>
                <Footer />
            </div>
        </main>
    )
}

export default portraitPage