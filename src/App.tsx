import Header from './components/Header';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import LatestAdditions from './components/LatestAdditions';
import ImmersiveExhibition from './components/ImmersiveExhibition';
import FeaturedCollections from './components/FeaturedCollections';
import ExploreCategories from './components/ExploreCategories';
import PartnerResources from './components/PartnerResources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Statistics />
        <LatestAdditions />
        <ImmersiveExhibition />
        {/* <FeaturedCollections /> */}
        <ExploreCategories />
        <PartnerResources />
      </main>
      <Footer />
    </div>
  );
}

export default App;
