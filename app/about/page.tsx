export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold font-anton">About</h1>
      <p className="text-xl font-blinker text-white/90">
        Scorefy is a music streaming platform that rewards users for listening to
        music. The more you listen, the more points you earn, and the higher your
        score. You can use your score to unlock new features, compete with friends,
        and more.
      </p>
      <h1>Our Story</h1>
      <p className="text-xl font-blinker text-white/90">
        Scorefy was founded in 2025 by a group of friends who wanted to create a
        new way to listen to music. We believe that music is a universal language
        that brings people together. We want to make it easy for you to listen to
        your favorite music and earn rewards for doing so.
      </p>
      <p className="text-xl font-blinker text-white/90">
        Scorefy is built with Next.js, Tailwind CSS, and TypeScript.
      </p>
    </div>
  );
}
