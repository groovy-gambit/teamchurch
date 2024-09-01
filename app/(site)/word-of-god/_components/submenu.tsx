"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SubMenu() {
	const pathName = usePathname();

	return (
		<section className="pt-3">
			<div className="flex flex-col">
				<Link
					href="/word-of-god/sermon"
					className={`py-2 ${pathName.includes("/word-of-god/sermon") && "font-bold"}`}
				>
					설교
				</Link>

				<Link
					href="/word-of-god/meditation"
					className={`py-2 ${pathName.includes("/word-of-god/meditation") && "font-bold"}`}
				>
					묵상
				</Link>

				<Link
					href="/word-of-god/membership-training"
					className={`py-2 ${pathName.includes("/word-of-god/membership-training") && "font-bold"}`}
				>
					멤버쉽반
				</Link>

				<Link
					href="/word-of-god/lecture"
					className={`py-2 ${pathName.includes("/word-of-god/lecture") && "font-bold"}`}
				>
					양육컨텐츠
				</Link>
			</div>
		</section>
	);
}
