<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProjectController extends AbstractController
{
    #[Route('/projet/portfolio-agathe-verasdonck', name: 'app_project_portfolio_agathe_verasdonck')]
    public function portfolioAgatheVerasdonck(): Response
    {
        return $this->render('project/portfolio-agathe-verasdonck.html.twig');
    }

    #[Route('/projet/aximonial', name: 'app_project_aximonial')]
    public function aximonial(): Response
    {
        return $this->render('project/aximonial.html.twig');
    }

    #[Route('/projet/ig-print', name: 'app_project_ig_print')]
    public function igPrint(): Response
    {
        return $this->render('project/ig-print.html.twig');
    }

    #[Route('/projet/server-parser', name: 'app_project_server_parser')]
    public function serverParser(): Response
    {
        return $this->render('project/server-parser.html.twig');
    }

    #[Route('/projet/esp-automobiles', name: 'app_project_esp_automobiles')]
    public function espAutomobiles(): Response
    {
        return $this->render('project/esp-automobiles.html.twig');
    }

    #[Route('/projet/aventure-culture', name: 'app_project_aventure_culture')]
    public function aventureCulture(): Response
    {
        return $this->render('project/aventure-culture.html.twig');
    }

    #[Route('/projet/aventure-culture/jouer', name: 'app_project_play_aventure_culture')]
    public function jeuAventureCulture(): Response
    {
        return $this->render('jeu-aventure-culture/index.html.twig');
    }
}
