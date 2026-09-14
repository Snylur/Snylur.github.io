---
title: Sunny "Number Basher" Lu
---

<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="dark">

<script src="https://cdn.jsdelivr.net/gh/ncase/nutshell/nutshell.js"></script>
<script>
Nutshell.setOptions({
  dontEmbedHeadings: true
});
</script>

<style>
/* ---------- base: pure black, green mono, one rectangle ---------- */
:root{
  --bg:    #000;
  --ink:   #33ff33;
  --dim:   #16b016;
  --panel: #050d05;
  --accent:#7cff7c;
  color-scheme: dark;
}

html{ background: var(--bg); }

body{
  max-width: 80ch;
  margin: 3rem auto;
  padding: 2rem 2.5rem;
  border: 1px solid var(--ink);
  background: var(--bg);
  color: var(--ink);
  font: 16px/1.65 "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  text-shadow: 0 0 2px rgba(51,255,51,.35);
  box-shadow: 0 0 30px rgba(51,255,51,.12);
}

@media (max-width: 700px){
  body{ margin:0; border-width:0; padding:1.25rem; }
}

/* blinking block cursor after the last line */
body::after{
  content:"\258C";
  animation: blink 1.1s steps(1) infinite;
}
@keyframes blink{ 50%{ opacity:0; } }

/* ---------- headings ---------- */
h1,h2,h3,h4{ font-weight:600; letter-spacing:.02em; }
h1{ font-size:1.35rem; }
h2{ font-size:1.15rem; }
h3{ font-size:1rem; }
h4{ font-size:1rem; color:var(--accent); }

h1::before,h2::before{
  content:"> ";
  color: var(--dim);
}

/* ---------- text ---------- */
a{
  color: var(--accent);
  text-decoration: underline;
  text-decoration-color: var(--dim);
  text-underline-offset: 3px;
}
a:hover{
  background: var(--ink);
  color: var(--bg);
  text-decoration: none;
}
strong{ color: var(--accent); }

code,pre,kbd,samp{ font-family: inherit; }
code{ background:#0a1f0a; padding:.1em .35em; }
pre{
  background: var(--panel);
  border: 1px solid var(--dim);
  padding: 1rem;
  overflow-x:auto;
}
pre code{ background:none; padding:0; }

blockquote{
  margin:1.5rem 0;
  padding:.25rem 1rem;
  border-left:2px solid var(--dim);
  color: var(--dim);
}

hr{ border:0; border-top:1px solid var(--dim); }

table{ border-collapse:collapse; }
th,td{ border:1px solid var(--dim); padding:.35rem .6rem; }
img{ max-width:100%; }

ul{ list-style:none; padding-left:1.5em; }
ul > li::before{
  content:"-";
  display:inline-block;
  width:1.5em;
  margin-left:-1.5em;
  color: var(--dim);
}

::selection{ background:var(--ink); color:var(--bg); }

/* ---------- nutshell: expandable links & bubbles ---------- */
.nutshell-expandable{
  border-bottom: 1px dotted var(--dim);
}
.nutshell-ball-up,
.nutshell-ball-down{
  background: var(--ink);
}

.nutshell-bubble{
  border: 1px solid var(--ink);
  border-radius: 0;
  background: var(--panel);
}
.nutshell-bubble-arrow{
  border-bottom-color: var(--ink);
  --arrow-background: var(--panel);
}
.nutshell-bubble code{ background:#0a1f0a; color:inherit; }
.nutshell-bubble blockquote{ border-left-color: var(--dim); }
.nutshell-bubble-from,
.nutshell-followup{ color: var(--dim); }

/* the little black icons need inverting to show up on black */
.nutshell-heading-embed img,
.nutshell-bubble-overflow-embed-button img,
.nutshell-bubble-overflow-close img{
  filter: invert(1) sepia(1) saturate(6) hue-rotate(65deg);
}

#nutshell-close-all{
  background: var(--bg);
  color: var(--ink);
  border: 1px solid var(--ink);
  border-radius: 0;
}

.nutshell-embed-modal{ background: rgba(0,0,0,.85); }
#nutshell-embed-modal-bubble{
  background: var(--panel);
  color: var(--ink);
  border: 1px solid var(--ink);
}
</style>

## Who am I? 

If you're just here for the résumé: Click [here](https://snylur.github.io/resume.pdf). 

Hi! I'm Sunny, and my legal name is Chang Lu. Some basic stats: 

- **Age:** 17
- **Sex:** Male
- **Birthday:** November 6th
- **Year of Birth:** 2008
- **Pronouns:** they/them

I'm super [:queer](#MyQueerness), probably slightly [:neurodivergent](#Neurodivergence). I have a wide range of [:interests](#MyInterests). You can find me [:online](#MyOnlinePresence) as Number Basher sometimes. 

Too many links and don't know where to start? Here's [:how others describe me](#HowOthersDescribeMe), and [:what others asked me (and my responses)](#AskMeAnything). 

Reach out to me at [luchang1106@icloud.com](mailto:luchang1106@icloud.com). 

## :x My Queerness

I don't generally elaborate much on my queerness, but if you want to stick some labels on me, I'm probably nonbinary, aromantic, and asexual. I use they/them pronouns. I'm a furry meow! 

Your gender and sexuality is equally valid! 

## :x Neurodivergence

I don't really know how to think about neurodivergence. To me, it is quite obvious that I am neurodivergent or at least somewhat fundamentally different from other people. I've not been able to get a diagnosis, but if I were to describe myself, I would tag myself as having autism spectrum disorder, attention deficit (hyperactive) disorder, and some personality disorder. If I do anything stupid, please tell me! I won't be able to guess. 

## :x My Interests

I'm a general enthusiast in a lot of things! Non-exhaustive list: 

- [:Puzzles](#Puzzles)
- [:Mathematics](#Mathematics)
- [:Programming](#Programming)
- [:Rationality](#Rationality)
- [:Writing](#Writing)
- [:Linguistics](#Linguistics)

## :x Puzzles

I do a little bit of physical puzzles (I almost collaborated with [GM 的秘密基地](https://www.youtube.com/@GM-bq6et)! Well, almost.) However, the vast majority of puzzles I do are pen-and-paper, or PDF puzzles. I helped make some puzzles for my friend Omega 3301's [Origami Puzzles](https://omega-3301.itch.io/origami-puzzles), and did playtesting for Blaž Gracar's [Herd](https://www.letibus.com/herd) and [Workworkwork](https://www.letibus.com/www) as well as the Potato Pirates co-op expansion. I've also made random puzzles in the past, some of which you can find under my [Puzzling Stack Exchange](https://puzzling.stackexchange.com/users/79896/numberbasher). 

I contribute to [PUZZDLE](https://puzzdle.net), which is a puzzle site featuring weekly puzzles. Similar, you can also find some of my puzzles on [Daily Akari](https://dailyakari.com). I also participated in puzzle hunts, and [mirrored one of my favorite puzzles](https://snylur.github.io/triddles). 

## :x Mathematics

Mathematics is my special interest! I've went a variety of mathematics contests like HMMT, SMT, DMM, BMT, and Yale math competition, so you might have met me somewhere there. Similarly, I have also attended Yau Math Camp and Ross Mathematics Program. 

I love all kinds of mathematics, but particularly combinatorics and particularly not geometry, which is funny since my research work revolves around linkages and strengthenings of Kempe's Universality Theorem. I do a lot of recreational mathematics as well, and you can frequently see me doing weird stuff in general. I'm in the PowerPoint Vexillology Discord colony (a part of Arglin's server), so you'll see me appear with Arglin Kampling and Dr. Zye particularly often. For instance, I was hanging around in the clock stream! 

You can find some mathematical content on my [YouTube channel](https://www.youtube.com/@numberbashersunny), particularly under the collaborations section. 

I work for [starmathcat](https://www.youtube.com/@starmathcat), helping write some of his worksheets! I'm also open to (online) tutoring positions — [send me an email](mailto:luchang1106@icloud.com)! 

## :x Programming

I program! Here's my [GitHub page](https://github.com/Snylur), and a [banished account](https://github.com/TvoozMagnificent). I am extremely skilled in Python, and especially in esoteric ways of programming, especially [code golfing](https://codegolf.stackexchange.com/users/111945/numberbasher) and [code obfuscation](https://pyobfusc.com/submissions2024/1843333336/). Most of my work is in Python. 

Other than that, I participated in Professor Rajiv Gandhi's [Program in Algorithmic and Combinatorial Thinking](https://algorithmicthinking.org) Year-Round and repeated as a Group II student / TA. Afterwards, Professor Rajiv Gandhi allowed me to audit University of Pennsylvania' CIS 160 and CIS 121, as well as Princeton University's COS 126. These courses allowed me to learn Java. 

I am also very familiar with $\LaTeX$, as well as Desmos. When contributing to the [HeXO Renderer open source project](https://github.com/Snylur/HeXO-Renderer), I also learned the bare minimum of Kotlin. 

## :x Rationality

I am somewhat interested in rationality. You should definitely check out [Harry Potter and the Methods of Rationality](https://www.hpmorcomic.com)! (Linked is the manga adaptation. The original text can be found [here](https://hpmor.com). I went to ESPR in 2025, if that says anything about me. 

## :x Writing

"The first words are the hardest among a writer’s journey."

Why do I write? This question presents itself to me, and I struggle to answer it. Maybe it is for relaxation. Maybe it is for reflection. Maybe it is for naught, after all. 

Yet to me, writing is an escape, a way to transport to an alternate world where you can do anything, everything — without consequences. There is one fundamental purpose to write: to imagine, to create, to explore, to be free. And sometimes, when the things in the real world come hard to bear, an alternative springs up to mind. 

Every piece of writing is a realization — the realization that there are things which could have happened that did not, that there is a plausible parallel to every plot, a tangible terrain to every turn. Every piece of writing is a beginning, the start of something revolutionary. 

Every piece of writing is a realization — the realization of that alternative world, putting every thought and every imagination into literal literary existence, transforming every creation to concrete words. Every piece of writing is a conclusion, the end of something revolutionary. 

So we write. We dance beneath the shining light, mastering our every might, and write.

This sounds interesting? This is an abandoned project, but you can read whatever has been completed [here](https://numbas.notion.site/kerut-nevodaq). 

## :x Linguistics

*toki a! mi ken toki pona lili. sina o toki tawa mi kepeken toki pona, la mi ken pona e toki pona mi a!* 

I honestly don't know much about linguistics, but I am a general enthusiast in the interesting puzzles it provides. I want to make a conlang at some point, but I don't know where to start. 

## :x My Online Presence

You can pretty much find me as Number Basher online pretty consistently! My discord is `sunny_lu_89`, and my E-mail is `luchang1106@icloud.com`. 

You can find me as [Sunny "Number Basher" Lu](https://www.youtube.com/@numberbashersunny) on YouTube, where I make a weird assortment of content which you may find interesting if you're a nerd. If you're into mathematics, particularly check out my collaborations with 3cycle. I also moderate [Dr. Zye's channel](https://www.youtube.com/@DrZye) and commentated along his 60-hour stream series. 

## :x How Others Describe Me

In March of 2026, I gave a survey to around 30 people asking: 

> hi! random question, if you don't mind — what are one to three things about me which you think are most interesting?

In September, I redid the survey and got slightly different results. 

You can view the [:March 2026 results](#March2026Poll) and [:September 2026 results](#September2026results). 

## :x March 2026 Poll

On WeChat, which is representative of my IRL friend group, I received the following responses (with multiplicity): 

- You like mathematics
- You speak toki pona
- You have an intriguing lunch preference
- You are a human
- You like starting random, thoughtful topics
- You are sometimes humorous
- You play tetris
- You are a human
- You have a strong intuition for problems and puzzles
- You are talkative
- You are active in weird discord groups
- You are able to learn things efficiency
- You seem good at and knowledgeable about mathematics
- You seem genuinely self-content instead of performative
- You think a lot and have your priorities straight
- You went to a television program called Super Brain
- You do random stuff in classes and get away with it
- You are comfortable asking random stuff like this question
- You are really into the things which you stufy
- You have diverse interests
- You want to go to MIT
- You are a mysterious person to me
- You become very focused when doing math
- You don't defend yourself when you are misunderstood
- You like to sing and be creative with it
- You know a lot of obscure mathematics
- You have a unique way of analyzing things
- You say "great chapter" to me every time
- You do a lot of puzzle hunts
- You went to a television program called Super Brain
- You think about exotic math problems
- You are very active in literature class
- You know a lot of random games
- You are in a variety of discord servers
- You type very fast
- You sing
- You play
- You learn
- You play chess
- You do mathematics
- You care about my emotions if and only if I explicitly express this
- You are interested in origami puzzles
- You are a friendly autistic furry nerd mathematician
- You are very easily understandable through your moments posts
- You participate in PowerPoint Vexillology

On Discord: 

- You name "Sunny" is interesting
- You participated in a hexagonal tic tac toe tournament
- You talk in a kind of autistic way
- You make some weird jokes
- You express a very abstract nonbinary gender
- You have formatting quirks in your messages
- You sometimes incorporate toki pona in your messages
- You like origami puzzles
- You seem to be involved in game-like math communities
- You make (good) fun of me a lot
- You use intentionally unconventional language
- You seem very enthusiastic about the concept of headspace

## :x September 2026

On WeChat: 

- You consistently wear a yellow jacket featuring Harry Potter
- You are talented in investigation and mathematics
- You are very humorous
- You are very willing to be helpful
- You seem highly immersed in your thoughts
- You do mathematics
- You are academically strong
- You are good at mathematics
- You discovered a game-breaking meta in Fork Five
- You do a lot of mathematics

## :x Ask Me Anything

In September of 2026, I polled this: 

> if i were to genuinely answer one question to the best of my ability, what would you ask me? (if i can, i will answer!)

On WeChat, I got the following responses: 

- What do you think of SSBS (my high school)?
- *I don't really think its curriculum has helped me immensely, since I self-study better than getting passive taught in school. However, the teachers are really supportive and helpful if you reach out to them, which is really much better than any other school I know. It's also simply the Schelling point of talented, academically strong, and interesting people.* 
- How do you plan on making money after you enter college?
- *Great question! I sometimes get especially depressed thinking about this, but lately I've been finding opportunities to earn money simply by making educational material. I did tutoring for a friend and also now make worksheets and earn money. Even though it's definitely not sustainable right now, I can definitely scale this if I absolutely have to. Of course, my plan A is becoming a professor.* 
- Did you choose to become "Sunny"? 
- *Honestly, I don't know if I have much of a choice anyhow. I definitely think I am completely capable of being somebody else in a highly similar alternative universe (which is my way of thinking about these questions), so I guess maybe. But if I were to be given a million chances, I'd take Sunny a million times. It's just part of me that's not really changeable, so I guess there was no choice after all.* 
- What is your take on the "what is the meaning of the universe" question? 
- *Honestly, I don't know. I like the notion that there is fundamentally no meaning, so nihilism, and I also like hedonism. It's simply not a thing worth thinking about for me right now as it just makes me depressed, but my throw-off answer is that living, for an individual, is to maximum some notion of happiness that is hard to define. As for the universe, any meaning is purely interpretive and emergent, so to me, the meaning of the universe is to make me happy.* 
- How to prove Goldbach's conjecture? 
- *I don't know. (See, this is why I add the "best of my ability" clause.)* 
- What do you think makes you different from the majority of people, and how do you feel being yourself? 
- *There definitely a fundamentally disordered part of me that seeks attention, but honestly I feel like it has been a great motivator for me than anything so I'm unwilling to let it go. Being myself is really fine for me since it allows me to put the limited energy I have to the things which I truly want to do, even if it means I get misunderstood (though typically only by people I don't care about).* 
- What would be the most impressive (to you) thing you could plausibly achieve in your life and will you try to achieve it? 
- *I honestly cannot conceive of the most impressive thing I can plausibly do (let's say become a version of Mr. Beast), but if I were to limit the scope to the next year, then it would be to get into MIT. Ultimately, though, I think I don't have to try to aim for a really impressive thing in the long run and I should just focus on doing the small things that lead to better results on average.* 
- When will you find the next game-breaking Fork Five meta? 
- *I don't know if it's possible. I think there's definitely more work that can be done to optimize the snek formation, so I would start from there. I don't forsee myself trying to break the game soon though.* 
- Among the things you are interested in, is there a connection between them? For instance, mathematics and furries. 
- *An interest in mathematics and furries correlates very significantly with neurodivergence and nerdiness. In general, you have to be built different to like mathematics, and also built different to like furries.* 
- At which age did you start liking mathematics? 
- *When I was really small. Like, six or seven years old when I discovered that $(x+1)^2=x^2+x+(x+1)$.* 
- Why do you choose to study math? 
- *I think it's a combination of my parents who sowed a seed of interest in me really early and the positive feedback loop where my interest in mathematics makes me do more mathematics, be better and more knowledgeable about it, and hence be even more interested in it. It's just been part of my life ever since I was super young.* 
- What is your view on the existance of the trans community (especially mtf)? 
- *I don't think there's much to it, honestly. I'm not familiar with any trans-exclusive communities (though I guess the fact that I am nonbinary makes me "trans" by its definition), so I can't say about that. I am active in a lot of communities which happen to be trans-heavy (like a lot of math servers), and in general these communities are more wholesome than average. I'm aware and not surprised by the existence of trans communities and specifically mtf trans communities as well, especially since a lot of stuff can be specific (GAHT, mtf voice training) to these communities.* 
- If you had a choice, how would you present yourself? 
- *Exactly how I present myself right now! I don't really like the way the universe is shape what I am, at least not in any restricting way. I might envision a universe where I'm a therian, I guess.* 

On Discord: 

- Whats the capital of Paraguay?
- *I don't know but a Google Search claims its Asunción and I believe it.* 
- Define the concept of infinity. 
- What is Joe Biden's favorite ice cream flavor?
- *I don't know. (See, this is why I add the "best of my ability" clause.)* 
- How was your experience collaborating with Dr. Zye?
- *Dr. Zye was wonderful to work with! He's way too accepting of my ideas to be honest, and it was genuinely wonderful being together with him in general, from the clock streams to the 3cycle videos. I'd do it again, 10/10.* 
- What’s the meaning of life?
- *To copy from another answer, honestly, I don't know. I like the notion that there is fundamentally no meaning, so nihilism, and I also like hedonism. It's simply not a thing worth thinking about for me right now as it just makes me depressed, but my throw-off answer is that living, for an individual, is to maximum some notion of happiness that is hard to define.* 
- What's your opinion on the word "the"?
- *Absolutely overrated, goes into D tier. I'm used to it but if one were to reconstruct English, it's definitely a word to go. Unless you want to do cryptographic analysis, in which case, S tier.* 
- Favorite card in a deck of cards? 
- *Seven of spades.* 
- If you could become perfect on a skill you have never tried, which one would it be?
- *Honestly, I can't think of many skills I have not tried, so it might just be fursuit-making. I have many skills I've tried but absolutely failed at, like drawing, so I'm definitely picking that if that is available.* 
- Would you be my friend? 
- *Yes.* 
- If you were to be immortalized as an object because of your STEM work (think euler, volt, ohm, watt, lagrangian, etc etc etc), what would you like to be and in what domain? 
- *I will exploit the fact that I will be immortalized to choose a particularly niche domain. PowerPoint vexillology and HeXO are on my list, but it would honestly likely be my work on linkages. That way, because I'm immortalized, my very niche domain will suddenly become famous. I would call it the "numberbasherian" linkage setup.* 
- What is Chaitin's constant for Chaitin's machine in his work *The Limits of Mathematics*? 
- *I don't know. (See, this is why I add the "best of my ability" clause.)* 
- Would you be able to solve a millennium problem? 
- *I'm surprisingly not very familiar with millennium problems as they don't connect to my fields of interest. In terms of what I deal with, the P versus NP problem is probably closest, but I don't think I will come close to resolving it. It also simply doesn't matter to me, so I probably won't concentrate on it.* 
- What do you think the role of mathematics (and study in general) will be if/when LLMs are sufficiently powerful to automate them? 
- *I simply don't believe anything short of general intelligence can automate the creative process of determining mathematical problems and solving them. A lot of information is already readily available on the internet, it just takes the right mindset to search them up. If we do have general intelligence, we have bigger things to worry about. I would prioritize not having general intelligence eradicate or effectively destroy the entire human race.* 
- How would you define the concept of infinity? 
- *Infinity is an object for which adjoining it into the ring of integers gives a partially ordered set where every integer is less than infinity. Of course, this is the ordinal notion of infinity, and the cardinal notion of infinity would have to involve cardinal set theory, which is a cardinal sin.* 
- Will you go back to Super Brain? 
- *Not in the forseeable future. I might return it after I graduate or something, or as a guest if they want me to.* 
- What's a question you wish more people asked you?
- *I would want more genuinely philosophical questions, and such meta answers are also really well-received. For instance, some people asked me what the meaning of life is, or what I think about the impact of LLMs on the role mathematics plays in education.* 

If you've read all the way till here, either you just scrolled to the bottom or you're really interested in me! If it's the latter, thank you! If you have any questions, feel free to ask through my Discord or E-mail! 
