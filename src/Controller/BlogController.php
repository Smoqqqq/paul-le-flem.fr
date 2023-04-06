<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/blog')]
class BlogController extends AbstractController
{
    #[Route('/', name: 'app_blog_search')]
    public function index(): Response
    {
        return $this->render('blog/search.html.twig', [
            'controller_name' => 'BlogController',
        ]);
    }

    #[Route('/accelerer-un-site-symfony', name: 'app_blog_speed_up_symfony')]
    public function speedUpSymfony(): Response
    {
        return $this->render('blog/speed-up-symfony.html.twig');
    }

    #[Route('/importer-des-produits-via-excel', name: 'app_blog_import_spreadsheet')]
    public function importSpreadSheet(): Response
    {
        return $this->render('blog/import-products-excel.html.twig');
    }

    #[Route('/ressources-pour-developpeurs', name: 'app_blog_dev_ressources')]
    public function developerRessources(): Response
    {
        return $this->render('blog/useful-links.html.twig');
    }

    #[Route('/les-qualites-du-developpeur', name: 'app_blog_developers_qualities')]
    public function developersQualities(): Response
    {
        return $this->render('blog/developers-qualities.html.twig');
    }
}
