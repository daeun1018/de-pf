import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 md:gap-16 lg:gap-20 bg-black">
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">김다은(KimDaEun)</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 text-white">
                  게임 그래픽 디자이너, 컨셉 디자이너
                </p>
              </div>
            </div>
            <img
              alt="Kim daeun"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              height="1000px"
              src="/리치.jpg"
              width="1000px"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center" id="projects">
  <div className="container px-4 md:px-6">
    <div className="space-y-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">게임 컨셉 디자인</h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-white">
            그래픽 디자인
          </p>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <a
          href="https://www.youtube.com/watch?v=uFzOHHZ1YhY"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-300 hover:shadow-lg transition-shadow duration-300"
        >
          <img
            alt="Project 1"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="310"
            src="/쿠냥_타이틀.jpg"
            width="550"
          />
        </a>
        <a
          href="https://www.youtube.com/watch?v=j10JKvbVrzo"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-300 hover:shadow-lg transition-shadow duration-300"
        >
          <img
            alt="Project 2"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="310"
            src="/쿠냥_나비.jpg"
            width="550"
          />
        </a>
        <a
          href="https://www.youtube.com/watch?v=c_5GJRbWOJk"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-300 hover:shadow-lg transition-shadow duration-300"
        >
          <img
            alt="Project 3"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="310"
            src="쿠냥_평론가.jpg"
            width="550"
          />
        </a>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-300 hover:shadow-lg transition-shadow duration-300"
        >
          <img
            alt="Project 4"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="310"
            src="/쿠냥_모드선택.jpg"
            width="550"
          />
        </a>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-300 hover:shadow-lg transition-shadow duration-300"
        >
          <img
            alt="Project 5"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="310"
            src="/쿠냥_계정정보.jpg"
            width="550"
          />
        </a>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-300 hover:shadow-lg transition-shadow duration-300"
        >
          <img
            alt="Project 6"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="310"
            src="/쿠냥_상점.jpg"
            width="550"
          />
        </a>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-300 hover:shadow-lg transition-shadow duration-300"
        >
          <img
            alt="Project 7"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="310"
            src="/쿠냥_스토리.jpg"
            width="550"
          />
        </a>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-300 hover:shadow-lg transition-shadow duration-300"
        >
          <img
            alt="Project 8"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="310"
            src="/쿠냥_플레이1.jpg"
            width="550"
          />
        </a>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-300 hover:shadow-lg transition-shadow duration-300"
        >
          <img
            alt="Project 9"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="310"
            src="/쿠냥_플레이2.jpg"
            width="550"
          />
        </a>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-300 hover:shadow-lg transition-shadow duration-300"
        >
          <img
            alt="Project 10"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="310"
            src="/쿠냥_클리어.jpg"
            width="550"
          />
        </a>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-300 hover:shadow-lg transition-shadow duration-300"
        >
          <img
            alt="Project 11"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="310"
            src="/쿠냥_결과화면.jpg"
            width="550"
          />
        </a>
      </div>
    </div>
  </div>
</section>



      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center" id="projects">
        <div className="container px-4 md:px-6">
          <div className="space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">제작 프로젝트</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-white">
                  학교에서 제작 참여한 프로젝트들입니다.
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href="https://www.youtube.com/watch?v=uFzOHHZ1YhY"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-300 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  alt="Project 1"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center sm:w-full"
                  height="310"
                  src="/관상.png"
                  width="550"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">2022년 1학기 프로젝트 : 관상</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    표지 일러스트, 캐릭터 데포르메, 채색 작업, ui, 엔딩 컷신
                  </p>
                </div>
              </a>
              <a
                href="https://www.youtube.com/watch?v=j10JKvbVrzo"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-300 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  alt="Project 2"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center sm:w-full"
                  height="310"
                  src="/나를갈아줘.png"
                  width="550"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">2022년 1학기 프로젝트 : 나를 갈아줘</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    캐릭터 스프라이트
                  </p>
                </div>
              </a>
              <a
                href="https://www.youtube.com/watch?v=c_5GJRbWOJk"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-300 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  alt="Project 3"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center sm:w-full"
                  height="310"
                  src="영광스런칼로리.jpg"
                  width="550"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">2023년 1학기 프로젝트 : 영광스런 칼로리</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    표지 일러스트, 주인공, 중식도 sd모델링(복셀), 엔딩 컷신 
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
  <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
    <div className="grid items-center justify-center gap-4 text-center">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">연락처</h2>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          제 작업이 필요하시다면 연락주세요.
        </p>
      </div>
      <div className="mx-auto w-full max-w-sm space-y-2">
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300"
            placeholder="성함"
          />
          <input
            type="email"
            className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300"
            placeholder="이메일"
          />
          <textarea
            className="flex min-h-[80px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300"
            placeholder="메세지"
          ></textarea>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 h-10 px-4 py-2 w-full"
            type="submit"
          >
            메세지 보내기
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


    </main>
  );
}
