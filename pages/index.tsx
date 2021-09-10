import Layout from '../components/Layout';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';

export default function Home(this: any) {
	return (
		<>
			<Head>
				<title>Rateria Poli-USP</title>
				<meta name="description" content="A bateria da Escola Politécnica" />
				<link rel="icon" href="/images/logo-fundo-azul.svg" />
			</Head>

			<Layout currentPage="Home">
				<div className={styles.carouselWrapper}>
					<Carousel
						emulateTouch
						infiniteLoop
						interval={10000}
						autoPlay
						renderArrowPrev={(onClickHandler, hasPrev, label) =>
							hasPrev && (
								<button
									type="button"
									onClick={onClickHandler}
									title={label}
									className={styles.leftArrow}
								>
									<FaAngleLeft size={40} />
								</button>
							)
						}
						renderArrowNext={(onClickHandler, hasNext, label) =>
							hasNext && (
								<button
									type="button"
									onClick={onClickHandler}
									title={label}
									className={styles.rightArrow}
								>
									<FaAngleRight size={40} />
								</button>
							)
						}
						showThumbs={false}
					>
						<div className={styles.carouselItem}>
							<div className={styles.image1}></div>
							<div className={styles.legendCarousel}>
								<h1>Quem somos?</h1>
								<p>
									A Rateria é a bateria da Escola Politécnica da Universidade de
									São Paulo! Nosso principal intuito é garantir a diversão tanto
									de quem toca quanto de quem nos ouve. Conheça um pouco mais
									sobre a nossa história!
								</p>
								<Link href="/sobre">
									<a className={styles.legendButton}>Saiba Mais!</a>
								</Link>
							</div>
						</div>
						<div className={styles.carouselItem}>
							<div className={styles.image2}></div>
							<div className={styles.legendCarousel}>
								<h1>Onde Tocamos?</h1>
								<p>
									Já participamos dos mais diversos eventos e competições,
									conheça e veja um pouco das nossas apresentações!
								</p>
								<Link href="/apresentacoes">
									<a className={styles.legendButton}>Saiba Mais!</a>
								</Link>
							</div>
						</div>
						<div className={styles.carouselItem}>
							<div className={styles.image3}></div>
							<div className={styles.legendCarousel}>
								<h1>O que tocamos?</h1>
								<p>
									Já tocamos diversos estilos ao longo dos anos de história, do
									samba ao rock, do funk ao sertanejo! Confira o nosso
									repertório atual!
								</p>
								<Link href="/repertorio">
									<a className={styles.legendButton}>Saiba Mais!</a>
								</Link>
							</div>
						</div>
						<div className={styles.carouselItem}>
							<div className={styles.image4}></div>
							<div className={styles.legendCarousel}>
								<h1>Fale conosco!</h1>
								<p>
									Se interessou e quer nos conhecer melhor ou contar com a nossa
									presença em algum dos seus eventos? Converse conosco!
								</p>
								<Link href="/contatos">
									<a className={styles.legendButton}>Fale conosco!</a>
								</Link>
							</div>
						</div>
					</Carousel>
				</div>
			</Layout>
		</>
	);
}
