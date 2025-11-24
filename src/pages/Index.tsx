import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	AlertTriangle,
	ArrowRight,
	Atom,
	BarChart,
	Beaker,
	Check,
	Dna,
	FlaskConical,
	Microscope,
	Sparkles,
	Target,
	TrendingUp,
	Users,
	Zap,
} from "lucide-react";

const Index = () => {
	return (
		<div className="min-h-screen bg-background">
			{/* Hero Header */}
			<header className="bg-primary text-primary-foreground py-8 px-4 md:py-12">
				<div className="container mx-auto max-w-6xl">
					<div className="flex items-center gap-3 mb-4">
						<Atom className="w-8 h-8 md:w-10 md:h-10" />
						<h1 className="text-3xl md:text-5xl font-bold">
							The Chemistry Behind AlphaFold
						</h1>
					</div>
					<p className="text-base md:text-xl opacity-90">
						Understanding the Chemistry of Structure Prediction
						using AI
					</p>
					<p className="text-lg md:text-xl opacity-90 mt-2">
						Bangladesh University of Business and Technology
					</p>
					<p className="text-sm md:text-base opacity-80 mt-2">
						By: Saif, Sammo, Sadik, Sozib and Mustak
					</p>
				</div>
			</header>

			<main className="container mx-auto max-w-6xl px-4 py-8 space-y-8">
				{/* Introduction */}
				<section className="section-blue rounded-lg p-6 md:p-8 animate-fade-in">
					<div className="flex items-center gap-2 mb-4">
						<Microscope className="w-6 h-6 text-primary" />
						<h2 className="text-2xl md:text-3xl font-bold text-foreground">
							Introduction
						</h2>
					</div>
					<div className="space-y-4 text-foreground">
						<p className="leading-relaxed">
							This work, launched by Google's AI company DeepMind,
							revolutionizes the field of protein structure
							prediction using artificial intelligence and deep
							learning techniques. This breakthrough has profound
							implications for our understanding of biology,
							disease, and drug discovery.
						</p>
						<p className="leading-relaxed">
							AlphaFold excels by predicting precise 3D structures
							from protein sequences alone, surpassing traditional
							computational approaches in both speed and accuracy.
							It enables researchers to delve into intricate
							molecular mechanisms that would otherwise remain
							obscure.
						</p>
					</div>
				</section>

				{/* Two Column Layout */}
				<div className="grid md:grid-cols-2 gap-6">
					{/* How AlphaFold Works */}
					<Card
						className="section-green border-0 p-6 md:p-8 animate-fade-in"
						style={{ animationDelay: "0.1s" }}
					>
						<div className="flex items-center gap-2 mb-4">
							<Zap className="w-6 h-6 text-primary" />
							<h2 className="text-2xl font-bold">
								How AlphaFold Works
							</h2>
						</div>
						<div className="space-y-4">
							<p className="text-sm leading-relaxed">
								AlphaFold uses deep learning neural networks
								trained on known protein structures from the
								Protein Data Bank (PDB). It analyzes amino acid
								sequences and predicts spatial relationships
								between residues.
							</p>
							<div className="bg-background/50 rounded-lg p-4 mt-4">
								<div className="flex items-center justify-center gap-2 text-sm font-medium">
									<div className="text-center">
										<div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
											<Dna className="w-8 h-8 text-primary" />
										</div>
										<p>Sequence</p>
									</div>
									<div>→</div>
									<div className="text-center">
										<div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
											<Atom className="w-8 h-8 text-primary" />
										</div>
										<p>AI Model</p>
									</div>
									<div>→</div>
									<div className="text-center">
										<div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
											<Sparkles className="w-8 h-8 text-primary" />
										</div>
										<p>Structure</p>
									</div>
								</div>
							</div>
						</div>
					</Card>

					{/* Applications */}
					<Card
						className="section-orange border-0 p-6 md:p-8 animate-fade-in"
						style={{ animationDelay: "0.2s" }}
					>
						<div className="flex items-center gap-2 mb-4">
							<Target className="w-6 h-6 text-primary" />
							<h2 className="text-2xl font-bold">
								Applications & Future
							</h2>
						</div>
						<div className="grid grid-cols-2 gap-3">
							<Badge className="bg-primary/10 text-foreground hover:bg-primary/20 justify-center py-2">
								<FlaskConical className="w-4 h-4 mr-1" />
								Drug Discovery
							</Badge>
							<Badge className="bg-primary/10 text-foreground hover:bg-primary/20 justify-center py-2">
								<Beaker className="w-4 h-4 mr-1" />
								Enzymes
							</Badge>
							<Badge className="bg-primary/10 text-foreground hover:bg-primary/20 justify-center py-2">
								<Microscope className="w-4 h-4 mr-1" />
								Disease Research
							</Badge>
							<Badge className="bg-primary/10 text-foreground hover:bg-primary/20 justify-center py-2">
								<Dna className="w-4 h-4 mr-1" />
								Genetics
							</Badge>
						</div>
					</Card>
				</div>

				{/* Chemical Principles */}
				<Card
					className="section-green border-0 p-6 md:p-8 animate-fade-in"
					style={{ animationDelay: "0.3s" }}
				>
					<div className="flex items-center gap-2 mb-4">
						<Atom className="w-6 h-6 text-primary" />
						<h2 className="text-2xl font-bold">
							Chemical Principles
						</h2>
					</div>
					<p className="text-sm mb-4">
						AlphaFold is founded on several core chemistry concepts:
					</p>
					<div className="grid md:grid-cols-2 gap-4">
						<div className="space-y-3">
							<div className="flex items-start gap-2">
								<div className="w-2 h-2 bg-primary rounded-full mt-2" />
								<div>
									<p className="font-semibold">
										Protein structure in biology
									</p>
									<p className="text-sm text-muted-foreground">
										Primary, secondary, tertiary, quaternary
										levels
									</p>
								</div>
							</div>
							<div className="flex items-start gap-2">
								<div className="w-2 h-2 bg-primary rounded-full mt-2" />
								<div>
									<p className="font-semibold">
										Hydrophobic & hydrophilic interactions
									</p>
									<p className="text-sm text-muted-foreground">
										Driving force behind protein folding
									</p>
								</div>
							</div>
							<div className="flex items-start gap-2">
								<div className="w-2 h-2 bg-primary rounded-full mt-2" />
								<div>
									<p className="font-semibold">
										Hydrogen bonds
									</p>
									<p className="text-sm text-muted-foreground">
										Stabilizes secondary structures
									</p>
								</div>
							</div>
						</div>
						<div className="space-y-3">
							<div className="flex items-start gap-2">
								<div className="w-2 h-2 bg-primary rounded-full mt-2" />
								<div>
									<p className="font-semibold">
										Disulfide bonds
									</p>
									<p className="text-sm text-muted-foreground">
										Covalent stabilization between cysteines
									</p>
								</div>
							</div>
							<div className="flex items-start gap-2">
								<div className="w-2 h-2 bg-primary rounded-full mt-2" />
								<div>
									<p className="font-semibold">
										Van der Waals forces
									</p>
									<p className="text-sm text-muted-foreground">
										Weak interactions in protein cores
									</p>
								</div>
							</div>
							<div className="flex items-start gap-2">
								<div className="w-2 h-2 bg-primary rounded-full mt-2" />
								<div>
									<p className="font-semibold">
										Energy minimization
									</p>
									<p className="text-sm text-muted-foreground">
										Proteins fold to lowest energy state
									</p>
								</div>
							</div>
						</div>
					</div>
				</Card>

				{/* Protein Folding */}
				<Card
					className="section-purple border-0 p-6 md:p-8 animate-fade-in"
					style={{ animationDelay: "0.4s" }}
				>
					<div className="flex items-center gap-2 mb-4">
						<Dna className="w-6 h-6 text-primary" />
						<h2 className="text-2xl font-bold">
							What is Protein Folding?
						</h2>
					</div>
					<p className="leading-relaxed mb-4">
						Proteins fold from a linear amino acid sequence into
						complex 3D structures necessary for their biological
						function. This process is governed by thermodynamics and
						kinetics.
					</p>
					<div className="bg-background/50 rounded-lg p-4">
						<h3 className="font-semibold mb-2">Key Points:</h3>
						<ul className="space-y-2 text-sm">
							<li className="flex items-start gap-2">
								<span className="text-primary font-bold">
									•
								</span>
								<span>
									Proteins are made up of amino acids linked
									by peptide bonds
								</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-primary font-bold">
									•
								</span>
								<span>
									Folding determines the protein's 3D shape
									and function
								</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-primary font-bold">
									•
								</span>
								<span>
									Misfolding can lead to diseases like
									Alzheimer's
								</span>
							</li>
						</ul>
					</div>
				</Card>

				{/* Why Was This Hard? */}
				<Card
					className="section-pink border-0 p-6 md:p-8 animate-fade-in"
					style={{ animationDelay: "0.5s" }}
				>
					<div className="flex items-center gap-2 mb-4">
						<FlaskConical className="w-6 h-6 text-primary" />
						<h2 className="text-2xl font-bold">
							Why Was This Hard?
						</h2>
					</div>
					<div className="space-y-3">
						<div className="bg-background/50 rounded-lg p-3">
							<p className="font-semibold mb-1 flex items-center gap-2">
								<Microscope className="w-4 h-4" /> Immense
								computational complexity
							</p>
							<p className="text-sm text-muted-foreground">
								A single protein can fold in astronomical number
								of ways
							</p>
						</div>
						<div className="bg-background/50 rounded-lg p-3">
							<p className="font-semibold mb-1 flex items-center gap-2">
								<Zap className="w-4 h-4" /> Subtle chemical
								interactions
							</p>
							<p className="text-sm text-muted-foreground">
								Tiny changes in sequence dramatically affect
								structure
							</p>
						</div>
						<div className="bg-background/50 rounded-lg p-3">
							<p className="font-semibold mb-1 flex items-center gap-2">
								<BarChart className="w-4 h-4" /> Limited
								experimental data
							</p>
							<p className="text-sm text-muted-foreground">
								Not all protein structures are experimentally
								determined
							</p>
						</div>
					</div>
				</Card>

				{/* Benefits & Challenges Grid */}
				<div className="grid md:grid-cols-2 gap-6">
					<Card
						className="section-green border-0 p-6 md:p-8 animate-fade-in"
						style={{ animationDelay: "0.6s" }}
					>
						<div className="flex items-center gap-2 mb-4">
							<TrendingUp className="w-6 h-6 text-primary" />
							<h2 className="text-2xl font-bold">Benefits</h2>
						</div>
						<ul className="space-y-2">
							<li className="flex items-start gap-2">
								<Check className="w-4 h-4 text-primary mt-1" />
								<span className="text-sm">
									Fast prediction of protein structures
								</span>
							</li>
							<li className="flex items-start gap-2">
								<Check className="w-4 h-4 text-primary mt-1" />
								<span className="text-sm">
									Cost-effective alternative to X-ray
									crystallography
								</span>
							</li>
							<li className="flex items-start gap-2">
								<Check className="w-4 h-4 text-primary mt-1" />
								<span className="text-sm">
									Accelerates understanding of biological
									mechanisms
								</span>
							</li>
							<li className="flex items-start gap-2">
								<Check className="w-4 h-4 text-primary mt-1" />
								<span className="text-sm">
									Facilitates novel drug design and therapy
									development
								</span>
							</li>
						</ul>
					</Card>

					<Card
						className="section-yellow border-0 p-6 md:p-8 animate-fade-in"
						style={{ animationDelay: "0.7s" }}
					>
						<div className="flex items-center gap-2 mb-4">
							<Zap className="w-6 h-6 text-primary" />
							<h2 className="text-2xl font-bold">Challenges</h2>
						</div>
						<ul className="space-y-2">
							<li className="flex items-start gap-2">
								<AlertTriangle className="w-4 h-4 text-destructive mt-1" />
								<span className="text-sm">
									Difficult to predict structures for complex
									proteins
								</span>
							</li>
							<li className="flex items-start gap-2">
								<AlertTriangle className="w-4 h-4 text-destructive mt-1" />
								<span className="text-sm">
									Model requires large training data to remain
									reliable
								</span>
							</li>
							<li className="flex items-start gap-2">
								<AlertTriangle className="w-4 h-4 text-destructive mt-1" />
								<span className="text-sm">
									Cannot always model protein dynamics and
									conformational changes
								</span>
							</li>
							<li className="flex items-start gap-2">
								<AlertTriangle className="w-4 h-4 text-destructive mt-1" />
								<span className="text-sm">
									Accuracy varies across diverse protein
									families
								</span>
							</li>
						</ul>
					</Card>
				</div>

				{/* Future Possibilities */}
				<Card
					className="section-purple border-0 p-6 md:p-8 animate-fade-in"
					style={{ animationDelay: "0.8s" }}
				>
					<div className="flex items-center gap-2 mb-4">
						<Sparkles className="w-6 h-6 text-primary" />
						<h2 className="text-2xl font-bold">
							Future Possibilities
						</h2>
					</div>
					<div className="grid md:grid-cols-2 gap-4">
						<div className="space-y-2">
							<div className="flex items-start gap-2">
								<ArrowRight className="w-4 h-4 text-primary mt-1" />
								<span className="text-sm">
									AI-designed proteins for new therapies
								</span>
							</div>
							<div className="flex items-start gap-2">
								<ArrowRight className="w-4 h-4 text-primary mt-1" />
								<span className="text-sm">
									Predicting chemical reactions in cells
								</span>
							</div>
							<div className="flex items-start gap-2">
								<ArrowRight className="w-4 h-4 text-primary mt-1" />
								<span className="text-sm">
									Designing new industrial enzymes
								</span>
							</div>
						</div>
						<div className="space-y-2">
							<div className="flex items-start gap-2">
								<ArrowRight className="w-4 h-4 text-primary mt-1" />
								<span className="text-sm">
									Improving crop resilience with engineered
									proteins
								</span>
							</div>
							<div className="flex items-start gap-2">
								<ArrowRight className="w-4 h-4 text-primary mt-1" />
								<span className="text-sm">
									Tailored medicine based on patient-specific
									protein structures
								</span>
							</div>
						</div>
					</div>
				</Card>

				{/* Conclusion */}
				<section
					className="bg-primary text-primary-foreground rounded-lg p-6 md:p-8 animate-fade-in"
					style={{ animationDelay: "0.9s" }}
				>
					<h2 className="text-2xl md:text-3xl font-bold mb-4">
						Conclusion
					</h2>
					<p className="leading-relaxed">
						AlphaFold marks a major milestone in computational
						chemistry and biology. It dramatically speeds the
						process of structure prediction, saving researchers
						years of laboratory work and bringing us closer to
						understanding the fundamental mechanics of life at the
						molecular level. By bridging advanced AI with chemical
						principles, AlphaFold enables new breakthroughs that
						once seemed impossible—from curing diseases to
						engineering sustainable solutions for the environment.
					</p>
				</section>

				{/* Team Footer */}
				<footer
					className="bg-muted rounded-lg p-6 md:p-8 text-center animate-fade-in"
					style={{ animationDelay: "1s" }}
				>
					<div className="flex items-center justify-center gap-2 mb-4">
						<Users className="w-5 h-5 text-primary" />
						<h3 className="text-xl font-bold">Presented By:</h3>
					</div>
					<div className="flex flex-wrap justify-center gap-6 text-sm">
						<div className="text-center">
							<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 overflow-hidden">
								<img
									src="/img-saif.png"
									className="w-full h-full object-cover"
									alt="Saif"
								/>
							</div>
							<p className="font-medium">Saif Shahriar</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 overflow-hidden">
								<img
									src="/img-sammo.jpg"
									className="w-full h-full object-cover"
									alt="Sammo"
								/>
							</div>
							<p className="font-medium">Abdullah Sammo</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 overflow-hidden">
								<img
									src="/img-sadik.png"
									className="w-full h-full object-cover"
									alt="Sadik"
								/>
							</div>
							<p className="font-medium">Zafor Sadik</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 overflow-hidden">
								<img
									src="/img-sozib.jpg"
									className="w-full h-full object-cover"
									alt="Sozib"
								/>
							</div>
							<p className="font-medium">Sozib Hasan</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 overflow-hidden text-primary font-bold">
								M
							</div>
							<p className="font-medium">Mustak Shahriar</p>
						</div>
					</div>
				</footer>

				{/* New Footer */}
				<footer className="bg-muted rounded-lg p-6 md:p-8 mt-8">
					<div className="container mx-auto max-w-6xl">
						<div className="flex justify-between items-center">
							{/* Special Thanks */}
							<div className="flex items-center gap-4">
								<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 overflow-hidden">
									<img
										src="/img-rony.jpg"
										className="w-full h-full object-cover"
										alt="Rony"
									/>
								</div>
								<div>
									<h3 className="text-xl font-bold">
										Special Thanks To
									</h3>
									<p className="text-muted-foreground">
										Talukder Rony
									</p>
									<p className="text-muted-foreground">
										Lecturer, Dept of Textile Engineering
									</p>
								</div>
							</div>

							{/* QR Codes */}
							<div className="flex items-center gap-8">
								<div className="text-center">
									<div className="w-24 h-24 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
										<img
											src="/img-qr.png"
											className="w-full h-full object-cover"
											alt="QR Code"
										/>
									</div>
									<p className="text-sm">AlphaFold Dataset</p>
								</div>
								<div className="text-center">
									<div className="w-24 h-24 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
										<img
											src="/img-qr.png"
											className="w-full h-full object-cover"
											alt="QR Code"
										/>
									</div>
									<p className="text-sm">
										Digitalized Version
									</p>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</main>
		</div>
	);
};

export default Index;
