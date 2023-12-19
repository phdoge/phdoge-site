import { Metadata } from "next"
import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "lp-items"


export const metadata: Metadata = {
  title: "PhDoge: The Philosophy Dogster",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://i.imgur.com/Vl0CFM2.png",
      },
    ],
  },
}

// Example data structure for your list items
const textBoxes = [
  {
    imgSrc: "path_to_image1.png",
    header: "Header 1",
    subtext: "This is subtext 1."
  },
  {
    imgSrc: "path_to_image2.png",
    header: "Header 2",
    subtext: "This is subtext 2."
  },
  // Add more items as needed
];

export default function Web() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
          <img
              src="images/phdoge-logo.png"
              alt="PhDoge Logo"
              className="mx-auto mb-4" // Adjust the styling as needed
              width={200} // Set the desired width
              height={200} // Set the desired height
            />
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              PhDoge
            </h1>
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              The Philosophy Dogster
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              The first community coin on Oasis Sapphire. A celebration of learnedness, scholarship, sophistication, and epistemic excellence.
            </p>
            <Button href="https://t.me/+rUTWj4iRv-w2Yzlk" className="mr-3">
              Join
            </Button>
            <Button
              href="https://t.me/+rUTWj4iRv-w2Yzlk"
              intent="secondary"
            >
              Buy now (coming soon)
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
    <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
      {LP_GRID_ITEMS.map((singleItem) => (
        <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-100 w-100 items-center justify-center p-1.5 text-blue-700 dark:bg-primary-900 lg:h-22 lg:w-22">
            {singleItem.icon}
          </div>
          <h3 className="mb-2 text-xl font-bold dark:text-white">{singleItem.title}</h3>
          <p className="text-gray-500 dark:text-gray-400">{singleItem.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* New section for text boxes */}

      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">How to Buy</h2>
          {textBoxes.map((item, index) => (
            <div key={index} className="flex items-center justify-start mb-6">
              <img
                src={item.imgSrc}
                alt="Image"
                className="mr-4 w-20 h-20" // Adjust size as needed
              />
              <div>
                <h3 className="text-xl font-bold dark:text-white">{item.header}</h3>
                <p className="text-gray-500 dark:text-gray-400">{item.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  )
}
