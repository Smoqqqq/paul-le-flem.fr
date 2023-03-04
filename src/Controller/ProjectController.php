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
