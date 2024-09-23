<div id="search">
    <div id="left">
        <a href="/sankliche" id="logo">San'Kliché</a>
        <div id="nav">
            <?php if (strpos($_SERVER['REQUEST_URI'], 'entreprise') === false) { ?>
                <a href="/sankliche" class="nav-link">Activités</a>
                <a href="/sankliche/mes-activites.php" class="nav-link">Mes Activités</a>
                <a href="/sankliche/entreprise" class="nav-link">Espace entreprise</a>
                <a href="/sankliche/aide.php" class="nav-link">Besoin d'aide</a>
            <?php } else { ?>
                <a href="/sankliche/entreprise/mon-compte.php" class="nav-link">Mon compte</a>
                <a href="/sankliche/entreprise/mes-avis.php" class="nav-link">Mes avis</a>
                <a href="/sankliche/entreprise/a-venir.php" class="nav-link">A venir</a>
                <a href="/sankliche" class="nav-link">Espace apprenant</a>
                <a href="/sankliche/entreprise/aide.php" class="nav-link">Besoin d'aide</a>
            <?php } ?>
        </div>
        <div id="navbar-toggle" onclick="document.getElementById('search').classList.toggle('open')">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    <form action="/sankliche" method="get">
        <div onclick="setHelp()" id="helpBtn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-raised-hand" viewBox="0 0 16 16">
                <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a1 1 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207" />
                <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            </svg> Guide
        </div>
        <?php if (strpos($_SERVER['REQUEST_URI'], 'entreprise') === false) { ?>
            <input type="text" name="search" placeholder="Recherchez le nom d'une activité">
            <button>Rechercher</button>
        <?php } ?>
    </form>
</div>

<script src="/sankliche/popup.js"></script>