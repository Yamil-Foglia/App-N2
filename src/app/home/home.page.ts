import { Component } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

	public nameOne: string;
	public nameTwo: string;
	public nameThree: string;
	public nameFour: string;
	public nameFive: string;

	public topic: number; 
	public language: number;

	public colors: boolean;
	public animals: boolean;
	public numbers: boolean;

	public cow: string = "/assets/vacaPrueba.png";
	public chicken: string = "/assets/chickenPrueba.png";
	public pork: string = "/assets/porkPrueba.png";
	public horse: string = "/assets/horsePrueba.png";
	public bull: string = "/assets/bullPrueba.png";

	public one: string = "/assets/onePrueba.png";
	public two: string = "/assets/twoPrueba.png";
	public three: string = "/assets/threePrueba.png";
	public four: string = "/assets/fourPrueba.png";
	public five: string = "/assets/fivePrueba.png";

	public id: string[] = [];


	constructor(private audio: NativeAudio) { }

	ngOnInit() {
		this.colors = true;
		this.animals = false;
		this.numbers = false;
		this.topic = 2;
		this.language = 1;
		this.btmSpanish();
	}


	public btmTopic(num: number): void {
		this.topic = num;
		if(num == 1)
		{
			this.colors = false;
			this.animals = false;
			this.numbers = true;
		}
		else if(num == 2)
		{
			this.colors = true;
			this.animals = false;
			this.numbers = false;
		}
		else
		{
			this.colors = false;
			this.animals = true;
			this.numbers = false;
		}

		if(this.language == 1)
			this.btmSpanish();
		else if(this.language == 2)
			this.btmPortuguese();
		else if(this.language == 3)
			this.btmEnglish();
	}

	public btmSpanish(): void{
		this.language = 1;
		this.preloadAudios();
		if(this.topic == 1)
		{
			this.nameOne = "Uno";
			this.nameTwo = "Dos";
			this.nameThree = "Tres";
			this.nameFour = "Cuatro";
			this.nameFive = "Cinco";
		}
		else if(this.topic == 2)
		{
			this.nameOne = "Rojo";
			this.nameTwo = "Azul";
			this.nameThree = "Amarillo";
			this.nameFour = "Verde";
			this.nameFive = "Negro";
		}
		else 
		{
			this.nameOne = "Vaca";
			this.nameTwo = "Gallina";
			this.nameThree = "Cerdo";
			this.nameFour = "Caballo";
			this.nameFive = "Toro";
		}
	}

	public btmPortuguese(): void{
		this.language = 2;
		this.preloadAudios();
		if(this.topic == 1)
		{
			this.nameOne = "Um";
			this.nameTwo = "Dois";
			this.nameThree = "Tres";
			this.nameFour = "Quatro";
			this.nameFive = "Cinco";
		}
		else if(this.topic == 2)
		{
			this.nameOne = "Vermelho";
			this.nameTwo = "Azul";
			this.nameThree = "Amarelo";
			this.nameFour = "Verde";
			this.nameFive = "Preto";
		}
		else 
		{
			this.nameOne = "Vaca";
			this.nameTwo = "Galinha";
			this.nameThree = "Porco";
			this.nameFour = "Cavalo";
			this.nameFive = "Touro";
		}
	}

	public btmEnglish(): void{
		this.language = 3;
		this.preloadAudios();
		if(this.topic == 1)
		{
			this.nameOne = "One";
			this.nameTwo = "Two";
			this.nameThree = "Three";
			this.nameFour = "Four";
			this.nameFive = "Five";
		}
		else if(this.topic == 2)
		{
			this.nameOne = "Red";
			this.nameTwo = "Blue";
			this.nameThree = "Yellow";
			this.nameFour = "Green";
			this.nameFive = "Black";
		}
		else 
		{
			this.nameOne = "Cow";
			this.nameTwo = "Chicken";
			this.nameThree = "Pork";
			this.nameFour = "Horse";
			this.nameFive = "Bull";
		}
	}

	public playAudio(position: number): void {
		this.audio.play(this.id[position]);
	}

	public preloadAudios(): void {
		for(let i=1; i<6; i++)
		{
			this.id[i]=this.topic.toString()+"-"+this.language.toString()+"-"+i;
			let lenguageParameter = this.language.toString();
			let positionParameter = i.toString();
			let topicParameter = this.topic.toString();
			this.audio.preloadSimple(this.id[i], "assets/Audios/MP3/"+topicParameter+"/"+lenguageParameter+"/"+positionParameter+".mp3");
		}
	}

}
