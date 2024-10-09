import ArrowRight from './svg/ArrowRight';

const App = () => (
	<div className="w-full min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] flex pt-[120px] justify-center">
		<main className="bg-white rounded-lg h-fit max-w-[340px] w-full shadow">
			<img
				src="/img/spacejoy-YqFz7UMm8qE-unsplash.jpg"
				alt="Spacejoy"
				className="rounded-t-lg w-full h-[288px] object-cover"
			/>
			<section className="py-6 px-4 flex flex-col gap-3">
				<header className="flex flex-col gap-2">
					<p className="text-green-700 text-sm bg-green-50 border border-green-200 w-fit rounded-full px-2">
						Interior
					</p>
					<h1 className="font-semibold text-neutral-900 text-lg">
						Top 5 Living Room Inspirations
					</h1>
				</header>
				<article className="flex flex-col gap-6">
					<p className="font-medium text-neutral-600">
						Curated vibrants colors for your living, make it pop & calm in the
						same time.
					</p>
					<button type="button" className="flex items-center gap-2">
						Read more <ArrowRight />
					</button>
				</article>
			</section>
		</main>
	</div>
);

export default App;
