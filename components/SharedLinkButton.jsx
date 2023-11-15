'use client';

import { useState } from 'react';
import { ShareIcon } from '@heroicons/react/20/solid';

export default function SharedLinkButton() {
	const [shared, setShared] = useState(false);

	const handleShareLink = () => {
		// copy link to clipboard
		navigator.clipboard.writeText(window.location.href);

		setShared(true);
		setTimeout(() => setShared(false), 1500);
	};

	return (
		<>
			<button
				onClick={handleShareLink}
				className="flex gap-1 items-center border px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700"
			>
				<ShareIcon className="h-4 w-4" />
				{shared ? 'Link copied to clipboard' : 'Share Link'}
			</button>
		</>
	);
}
