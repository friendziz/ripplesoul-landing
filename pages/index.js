import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RippleSoul – Say What Matters</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <img src="/logo.png" alt="RippleSoul Logo" className={styles.logo} />

      <p className={styles.subheadline}>An emotional journaling and praise app to say what matters before it’s too late.</p>

      <div className={styles.features}>
        <h2>What You'll Get:</h2>
        <ul>
          <li>💬 AI-guided praise and apology writing</li>
          <li>🎯 Emotional growth milestones</li>
          <li>🔒 Private love letter vault</li>
          <li>🌍 Share publicly or privately</li>
        </ul>
      </div>

      <div className={styles.notionCard}>
        <h2>🌈 RippleSoul Community Guidelines</h2>
        <p>Because love, praise, forgiveness, and kindness deserve a safe space.</p>

        <h3>✅ What We Encourage</h3>
        <ul>
          <li><strong>Respectful Expression</strong>: Share openly, but kindly. Every heart behind the screen matters.</li>
          <li><strong>Positive Impact</strong>: Use the platform to heal, celebrate, forgive, and uplift.</li>
          <li><strong>Listening First</strong>: Take time to understand before responding. This is a space for emotional safety.</li>
          <li><strong>Anonymity with Integrity</strong>: Be truthful even when you’re anonymous.</li>
          <li><strong>Praise Before Judgment</strong>: Share something positive before offering any critique.</li>
        </ul>

        <h3>❌ What We Don’t Allow</h3>
        <ul>
          <li>Bullying or Harassment</li>
          <li>Hateful or Discriminatory Speech</li>
          <li>Shaming Others’ Stories or Choices</li>
          <li>Sharing Private Information (Doxxing)</li>
          <li>Trolling, Spamming, or Reaction Manipulation</li>
        </ul>

        <h3>🛡️ Moderation Policy</h3>
        <ul>
          <li><strong>First Story Review</strong>: New users' first story is reviewed by 10 community members before being visible.</li>
          <li><strong>Trust-Based Visibility</strong>: Users earn posting rights as they gain trust, praise, or love.</li>
          <li><strong>Sensitive Content Handling</strong>: Stories about trauma or apologies may be reviewed to ensure safety.</li>
          <li><strong>Comment Filters</strong>: Harmful language is auto-detected and blocked in real time.</li>
          <li><strong>Reports & Action</strong>: Violations are reviewed within 48 hours. Severe violations may result in bans.</li>
        </ul>

        <h3>❤️ Your Role in RippleSoul</h3>
        <p>By using RippleSoul, you are part of a collective mission to:</p>
        <ul>
          <li>Spread emotional wellness</li>
          <li>Heal through praise, love, and truth</li>
          <li>Protect this space from harm—for yourself and for others</li>
        </ul>

        <div className={styles.quoteBlock}>
          “Kindness is contagious. Let’s make it viral.”
        </div>
      </div>

      <footer className={styles.footer}>
        <p>Made with 💙 by Francis Tonacao | <a href="https://ripplesoul.com">ripplesoul.com</a></p>
      </footer>
    </div>
  )
}