import Hero from "../components/Hero/Hero";
import NewCollections from "../components/NewCollections/NewCollections";
import NewsLetter from "../components/NewsLetter.jsx/NewsLetter";
import Offers from "../components/Offers/Offers";
import Popular from "../components/Popular/Popular";

export default function Shop() {
    return (
        <div>
            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
            <NewsLetter />
        </div>
    )
}
