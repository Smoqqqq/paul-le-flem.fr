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
}
