import type { Metadata } from 'next';
import Hero from 'components/Hero';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'JangSu 커리어 소개',
};

const TITLE_CLASS = 'm-2 text-2xl font-bold text-gray-800';

export default function page() {
  return (
    <>
      <Hero />
      <section className="m-8 bg-gray-100 p-8 text-center shadow-lg">
        <h2 className={TITLE_CLASS}>내가 누굴까?</h2>
        <p>
          농구와 술을 좋아하는 프론트 개발자 <br /> 재밌는 웹 개발을 하고
          싶습니다!
        </p>
        <h2 className={TITLE_CLASS}>경력</h2>
        <p>
          한샘 (~현재)
          <br />
          스토어링크 (~2023)
          <br />
          위메프오 (~2022)
          <br />
          이노팸 (~2020) <br />
          신한항업 (~2018) <br />
          공간정보기술 (~2017) <br />
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        React, Vue, Typescript <br />
        Git, Monorepo, Clean Code <br />
        VS Code, WebStorm
      </section>
    </>
  );
}
