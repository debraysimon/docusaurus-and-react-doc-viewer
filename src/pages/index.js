import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";


import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}


export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    const docs = [
        { uri: "https://www.pharmacieveau.fr/files/boutique/produits/doc/367-doliprane1000cpsec.pdf" }, // Local File
        //{ uri: require("./test.pdf")} //documentURI.startsWith is not a function
    ];
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
          <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
