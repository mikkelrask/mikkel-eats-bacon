import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';


const images = [
    {
        url: "../assets/unmaker.png",
        link: "https://raske.xyz/work/unmaker"
    },
    {
        url: "../assets/svanemøllen.jpg",
    },
    {
        url: "../assets/bbtixdk.png",
        link: "https://raske.xyz/work/bbtix"
    },
    {
        url: "../assets/magazine.jpg",
    },
    {
        url: "../assets/slowednesdays.png",
        link: "https://vimeo.com/manage/231707739/general"
    },
    {
        url: "../assets/mædl.webp",
    },
    {
        url: "../assets/tales-from-kopenhagen.png",
    },
    {
        url: "../assets/spot-festival.jpg",
    },
    {
        url: "../assets/italia.jpg",
    },
    {
        url: "../assets/kjøbenhavn.jpeg",
    },
    {
        url: "../assets/stormbro.jpg"
    },
    {
        url: "../assets/by-simon-ståhlen.png",
    },
    {
        url: "../assets/uniqkey.png",
        link: "https://vimeo.com/252501595"
    },
    {
        url: "../assets/coffee-edit.png",
        link: "https://vimeo.com/233854422"
    },
    {
        url: "https://mir-s3-cdn-cf.behance.net/projects/max_808/64e31790440223.Y3JvcCwxNDAwLDEwOTUsMCwyNjY.jpg",
        link: "https://www.behance.net/gallery/90440223/ECCO-AW20-Collection-Premiere"
    },
    {
        url: "../assets/uniqkey-design.png",
        link: "https://www.behance.net/gallery/76820575/uniqkey-saas-website"
    },
    {
        url: "../assets/curves.jpg",
    },
    {
        url: "../assets/vejlefjord.jpg",
    },
    {
        url: "../assets/deads-marble.png",
    },
    {
        url: "../assets/lady-in-red.jpg",
    },
    {
        url: "../assets/oisters.jpeg",
    },
    {
        url: "",
        link: "https://vimeo.com//234205120"
    },
    {
        url: "../assets/android.png"
    },
    {
        url: "../assets/oksehalen.jpeg",
    },
    {
        url: "../assets/joller.jpg"
    }


];

const MasonryComponent = () => {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 650: 1, 900: 2, 1600: 3 }}>
            <Masonry columnsCount={3} gutter="1rem">
                {images.map((image, i) => (
                    <a href={image.link}><img key={i} src={image.url} style={{ width: "100%", display: "block" }} /></a>
                ))}
            </Masonry>
        </ResponsiveMasonry>
    )
}

export default MasonryComponent;