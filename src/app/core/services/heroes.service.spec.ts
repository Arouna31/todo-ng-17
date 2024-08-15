// import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HeroesService, Hero } from './heroes.service';
import { TestBed } from '@angular/core/testing';

describe('HeroesService', () => {
  let service: HeroesService;
  let httpTestingController: HttpTestingController;

  // Données de test
  const mockHeroes: Hero[] = [
    { id: 1, name: 'Hero One' },
    { id: 2, name: 'Hero Two' },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importer le module de test HTTP
      providers: [HeroesService],
    });

    service = TestBed.inject(HeroesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Assurer qu'il n'y a pas de requêtes HTTP en attente
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return heroes from GET request', () => {
    // Appeler la méthode du service
    service.getHeroes().subscribe((heroes) => {
      expect(heroes).toEqual(mockHeroes);
    });

    // Vérifier la requête HTTP
    const req = httpTestingController.expectOne('api/heroes');
    expect(req.request.method).toEqual('GET');
    req.flush(mockHeroes); // Simuler la réponse
  });

  it('should handle HTTP error', () => {
    const errorMessage = 'Http failure response for api/heroes: 404 Not Found';

    // Appeler la méthode du service
    service.getHeroes().subscribe({
      next: () => fail('expected an error, not heroes'),
      error: (error) => {
        // expect(error).toContain(errorMessage);
        expect(error.message).toContain('404 Not Found');
      },
    });

    // Vérifier la requête HTTP
    const req = httpTestingController.expectOne('api/heroes');
    req.flush(errorMessage, { status: 404, statusText: 'Not Found' });
  });
});
