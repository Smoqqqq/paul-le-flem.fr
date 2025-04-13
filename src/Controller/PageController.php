<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class PageController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        return $this->render('page/index.html.twig');
    }

    #[Route("/sankliche")]
    #[Route("/sankliche/{path}")]
    #[Route("/sankliche/{path}/{path2}")]
    public function renderApp(string $path = 'index.php', string $path2 = ''): Response
    {
        $path2 = $path2 ? '/' . $path2 : '';

        $path2 = str_contains($path, 'entreprise') && $path2 == '' ? "/index.php" : $path2;

        // Path to the other PHP application's entry file
        $otherAppEntryFile = __DIR__ . '/../../public/sankliche-php/' . $path . $path2;

        // Check if the entry file exists
        if (file_exists($otherAppEntryFile)) {
            // Include the other application's entry file
            ob_start();
            include $otherAppEntryFile;
            $content = ob_get_clean();

            // Return the response
            return new Response($content);
        }

        // If the entry file doesn't exist, return a 404 response
        return new Response($otherAppEntryFile);
    }
}
