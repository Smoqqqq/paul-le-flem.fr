<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/projet', name: 'app_project_')]
class ProjectController extends AbstractController
{
    #[Route('/portfolio-agathe-verasdonck', name: 'portfolio_agathe_verasdonck')]
    public function portfolioAgatheVerasdonck(): Response
    {
        return $this->render('project/portfolio-agathe-verasdonck.html.twig');
    }

    #[Route('/aximonial', name: 'aximonial')]
    public function aximonial(): Response
    {
        return $this->render('project/aximonial.html.twig');
    }

    #[Route('/ig-print', name: 'ig_print')]
    public function igPrint(): Response
    {
        return $this->render('project/ig-print.html.twig');
    }

    #[Route('/server-parser', name: 'server_parser')]
    public function serverParser(): Response
    {
        return $this->render('project/server-parser.html.twig');
    }

    #[Route('/esp-automobiles', name: 'esp_automobiles')]
    public function espAutomobiles(): Response
    {
        return $this->render('project/esp-automobiles.html.twig');
    }

    #[Route('/aventure-culture', name: 'aventure_culture')]
    public function aventureCulture(): Response
    {
        return $this->render('project/aventure-culture.html.twig');
    }

    #[Route('/aventure-culture/jouer', name: 'play_aventure_culture')]
    public function jeuAventureCulture(): Response
    {
        return $this->render('jeu-aventure-culture/index.html.twig');
    }

    #[Route('/anglais-sans-probleme', name: 'anglais_sans_probleme')]
    public function anglaisSansProbleme(): Response
    {
        return $this->render('project/anglais-sans-probleme.html.twig');
    }
}
