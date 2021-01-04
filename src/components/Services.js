import React from "react";
import Service1 from "./images/services-6.svg";
import Service3 from "./images/services-5.svg";

const Services = () => {
	return (
		<>
			<div className="services">
				<div className="ux-ui-pic">
					<img src={Service1} alt="ux/ui writing" />
				</div>
				<div className="ux-ui-text">
					<h1 className="service-heading">UX Writing</h1>
					<p className="service-text">
						I develop clear and useful text in product interfaces to help
						users reach a specific goal, whether that's completing a form
						or tapping a button. This includes every type of content from
						on-screen help systems, user onboarding and in-app messages to
						push notifications and tooltips.{" "}
					</p>
					<p className="services-s">
						.Microcopy .Taxonomy & Labeling .Chatbots .User Research
						.Content Style Guide .User Testing .Design Principles
						.Prototype
					</p>
				</div>
			</div>

			<div className="services">
				<div className="content-writing-pic">
					<img src={Service3} alt="ux/ui writing" />
				</div>
				<div className="content-writing">
					<h1 className="service-heading">Content Writing</h1>
					<p className="service-text">
						Give your business a competitive edge with powerful content
						that can be targeted to any segment of your audience. No
						matter how large or complex your project, my custom-built
						solutions including articles, eDMs, and case studies will help
						you implement a plan that maximizes your business’s online
						exposure.{" "}
					</p>
					<p className="services-s">
						.Headlines & Taglines .Content Strategy .Blogs & Articles
						.Social .Media Content .Video Scripts .eDMs & Newsletters
						.Case Studies .Whitepapers
					</p>
				</div>
			</div>
		</>
	);
};

export default Services;
