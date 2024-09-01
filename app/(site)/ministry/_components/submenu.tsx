"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SubMenu() {
	const pathName = usePathname();

	return (
		<section className="pt-3">
			<div className="flex flex-col">
				<Link
					href="/ministry/small-group"
					className={`py-2 ${pathName.includes("/ministry/small-group") && "font-bold"}`}
				>
					소그룹
				</Link>
				<Link
					href="/ministry/missionary"
					className={`py-2 ${pathName.includes("/ministry/missionary") && "font-bold"}`}
				>
					선교
				</Link>
				<Link
					href="/ministry/event"
					className={`py-2 ${pathName.includes("/ministry/event") && "font-bold"}`}
				>
					이벤트
				</Link>
				<Link className="py-2" href="https://visionyouthcc.org" target="_blank">
					VYCC
				</Link>
			</div>
		</section>
	);
}
