<script>
export default {
	data() {
		return {
			publications: [{
			title: "I Remember Seeing This Video: Image Driven Search in Video Collections",
			summary: "We present a novel technique for image driven shot retrieval in video data. Specifically, given a query image, our method can efficiently pick the video segment containing that image. Video is first divided into shots. Each shot is described using an embedded hidden Markov model (EHMM). The EHMM is trained on GIST-like descriptors of frames in that shot. The trained EHMM computes the likelihood that a query image belongs to the shot. A Support Vector Machine classifier is trained for each EHMM. The classifier provides a yes/no decision given the likelihood value produced by its EHMM. Given a collection of shot models from one or more videos, the proposed technique can efficiently decide whether or not an image belongs to a video by identifying the shot most likely to contain that image. The proposed technique is evaluated on a realistic dataset.",
			url: null,
			location: "Regina, Saskatchewan",
			page: "Tenth Conference on Computer and Robot Vision, CRV 2013, 326-331"
		}, {
			title: "Topic Models for Image localization",
			summary: "We present a new scheme for partitioning geo-tagged reference image database in an effort to speed up (query) image localization while maintaining acceptable localization accuracy. Our method learns a topic model over the reference database, which in turn is used to divide the reference database into scene groups. Each scene group consists of “visually similar” images as determined by the topic model. Next raw Scale-Invariant Feature Transform (SIFT) features are collected from every image in a scene group a Fast Library for Approximate Nearest Neightbours (FLANN) index is constructed. Given a query image, ﬁrst its scene group is determined using the topic model and then its SIFT features are matched against the corresponding FLANN index. The query image is localized using the location information from the visually similar images in the reference database. We evaluate our approach on Google Map Street View dataset and demonstrate that our method outperforms a competing technique.",
			url: "./assets/papers/13-crv-c.pdf",
			location: "Regina, Saskatchewan",
			page: "Tenth Conference on Computer and Robot Vision, CRV 2013, 136-143"
		}]
		};
	}
}
</script>
<template>
	<section class="resume-section" id="publications">
		<div class="resume-section-content">
			<h2 class="mb-5">Publications</h2>
			<div class="d-flex flex-column flex-md-row justify-content-between mb-5" v-for="pub in publications">
				<div class="flex-grow-1">
					<h3 class="mb-0">{{ pub.title }}</h3>
					<div class="subheading mb-3">{{ pub.page }}&nbsp;<a :href="pub.url" target="_blank" v-if="pub.url"><i class="fa-solid fa-file-arrow-down"></i></a></div>
					<p class="font-size">{{ pub.summary }}</p>
				</div>
				<div class="flex-shrink-0">
					<span class="text-primary">{{ pub.location }}</span>
				</div>
			</div>
		</div>
	</section>
</template>

<style>
.summary {
	font-size: small;
}
</style>