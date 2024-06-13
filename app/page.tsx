import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 md:gap-16 lg:gap-20">
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Zara Wilkins</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Crafting Captivating Game Concepts: Zaras Journey as a Visionary Designer
                </p>
              </div>
            </div>
            <img
              alt="Kim daeun"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              height="550"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Game Concept Art Gallery</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore Zaras captivating game concept art, showcasing her exceptional talent and creativity.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            <img
              alt="Concept Art 1"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
            <img
              alt="Concept Art 2"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
            <img
              alt="Concept Art 3"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
            <img
              alt="Concept Art 4"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
            <img
              alt="Concept Art 5"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
            <img
              alt="Concept Art 6"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container mx-auto max-w-screen-xl grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Zara Wilkins</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Zara Wilkins is a highly talented game concept designer with a passion for creating captivating and
              visually stunning game environments. With a strong background in art and design, Zara has honed her skills
              to bring her creative visions to life, crafting immersive and memorable game experiences.
            </p>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Her attention to detail, combined with a deep understanding of game mechanics and player psychology,
              allows Zara to develop concept art that not only looks stunning but also enhances the overall gameplay
              experience. Zaras work has been featured in numerous industry publications and has garnered praise from
              developers and gamers alike.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}