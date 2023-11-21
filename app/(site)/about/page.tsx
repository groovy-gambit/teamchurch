'use client';

import Image from 'next/image';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import heroImage from '@/public/about-hero.png';
import Link from 'next/link';

import Header from '@/components/ui/header';

export default function Home() {
  return (
    <main
      className="align-center flex min-h-screen flex-col items-center 
                  justify-between bg-white align-top"
    >
      <div className="mx-auto h-96 px-0 lg:container">
        <Header />
        <div className="flex flex-row pb-20">
          {/* Two Column Layout */}
          <div className="hidden  pr-6 lg:flex lg:w-56 lg:flex-col">
            <section className="border-b border-gray-300 pb-2">
              {/* Current Section Title */}
              <h2 className="py-2">소개</h2>
            </section>
            <section>
              {/* Subsection menu */}
              <div className="flex flex-col">
                <Link href="/about" className="py-2 font-bold">
                  교회 안내
                </Link>

                <Link href="/hours" className="py-2">
                  예배 시간
                </Link>

                <Link href="/staff" className="py-2">
                  섬기는 사람들
                </Link>

                <Link href="/contact" className="py-2">
                  위치 및 연락 방법
                </Link>
              </div>
            </section>
          </div>
          <div className="lg:w-subpage-main flex flex-auto flex-col">
            {/* breadcrumb */}
            <section className="flex flex-row py-2">
              <span className="mr-2">소개</span>
              <ChevronRightIcon className="mr-2 h-6 w-4 font-bold" />
              <span className="mr-2 font-bold">교회 안내</span>
            </section>
            {/* Main */}
            <section className="prose mt-6">
              <h1>교회 안내</h1>
              <Image
                alt="hero-banner"
                src={heroImage}
                className="rounded-md"
                width={704}
              />
              <p className="break-word">
                팀쳐치는 가정과 다음세대에 대한 구체적인 비전을 가지고 세 목회자
                가정의 헌신으로 시작되었습니다. 인격적인 성숙함과 수평적이면서도
                세련된 커뮤니케이션이 필수적인 팀사역으로 출발하였기에 가장
                직관적으로 ‘팀쳐치’가 교회의 이름이 되었습니다. 팀사역에 대한
                부정적인 시각이나 예상되는 어려움에도 불구하고 그것을 잘 감당할
                때 얻게 될 성도들을 위한 유익이 훨씬 크다고 확신하기에 팀쳐치는
                리더십이나 모든 성도들의 섬김에 있어서 좁게든, 넓게는 팀사역의
                가치를 실현해 나갈 것입니다. 
              </p>
              <h2>비전선언문</h2>
              <ul>
                <li>
                  첫째, 우리의 가장 위대한 비전은 하나님을 예배하는 것이며,
                  하나님께 합당한 영광을 돌려 드림으로써 우리에게 주신 가장
                  중요한 계명인 하나님을 사랑하는 것이다.
                </li>

                <li>
                  둘째, 우리의 비전은 서로 사랑하라는 계명을 지키는 것이니,
                  무엇보다 남편과 아내, 부모와 자녀, 그리고 우리에게 허락해 주신
                  그리스도의 지체들인 교회를 사랑하는 것이다.
                </li>
                <li>
                  셋째, 우리의 비전은 또한 이웃을 사랑하라는 계명을 지키는
                  것이니, 우리의 지역사회에 있는 가난한 사람들, 병들고 장애를
                  입은 사람들. 그리고 여러가지 필요가 있는 이웃을 섬기며
                  사랑하는 것이다.
                </li>
                <li>
                  넷째, 우리의 비전은 모든 열방과 민족을 사랑하는 것이니, 우리의
                  동족인 북한을 비롯하여 많은 열방과 민족에게 복음을 전할 뿐만
                  아니라, 그들의 필요를 채우기 위한 효과적인 섬김을 감당하므로
                  예수 그리스도께서 위임하신 명령을 순종하는 것이다.
                </li>
              </ul>
              <h2>교단과 신학</h2>
              <p className="break-word">
                팀쳐치의 세 목회자는 한국의 장로교(합동/독립) 계통과 침례교
                계통의 건전한 개혁주의 신학적 배경을 가지고 있으며, 현재는
                미주에 있는 어느 교단에도 소속되어 있지 않습니다. 기본적으로
                성경과 사도신경, 그리고 칼빈주의 신학에 기반한 웨스트민스터
                신앙고백과 하이델베르그 신앙고백을 표준문서로 받습니다. 
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
