<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@page import="model.RewardModel"%>
<%@page import="service.RewardsService"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%!
    List<RewardModel> rewards = RewardsService.getRewards();
%>
<%
    if (rewards == null) {
        rewards = new ArrayList<>();
    }
%>
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- displays site properly based on user's device -->

        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">

        <title>Mastercraft Bamboo Monitor Riser</title>

        <link rel="stylesheet" href="css/reset.css">
        <link rel="stylesheet" href="css/style.css">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Commissioner:wght@400;500;700&display=swap" rel="stylesheet">
    </head>

    <body>
        <header>
            <nav>
                <div class="logo"><img src="./images/logo.svg" alt="crowdfund logo"></div>
                <ul class="nav-buttons">
                    <li><a href="#" class="nav-item">About</a></li>
                    <li><a href="#" class="nav-item">Discover</a></li>
                    <li><a href="#" class="nav-item">Get Started</a></li>
                </ul>
                <img src="./images/icon-hamburger.svg" alt="hamburger open" class="hamburger-open hamburger active" >
                <img src="./images/icon-close-menu.svg" alt="hamburger close" class="hamburger-close hamburger">
            </nav>
            <section id="title-card">
                <img src="./images/logo-mastercraft.svg" alt="mastercraft logo">
                <h1>Mastercraft Bamboo Monitor Riser</h1>
                <p>A beautiful &#38 handcrafted monitor stand to reduce neck and eye strain.</p>
                <div class="functions">
                    <button class="backproject" data-id="-1">Back this project</button>
                    <button id="bookmark" class="">
                        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fill-rule="evenodd">
                        <circle fill="#2F2F2F" cx="28" cy="28" r="28"/>
                        <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/>
                        </g>
                        </svg>
                        <span>Bookmark</span></button>
                </div>
            </section>
        </header>
        <main>
            <section id="figure-card">
                <div class="item-container">
                    <div class="item">
                        <h5>$89,914</h5>
                        <p>of $100,000 backed</p>
                    </div>
                    <div class="item">
                        <h5>5,007</h5>
                        <p>total backers</p>
                    </div>
                    <div class="item">
                        <h5>56</h5>
                        <p>days left</p>
                    </div>
                </div>
                <span class="progress">
                    <div class="line"></div>
                </span>
            </section>
            <section id="about-card">
                <div class="content">
                    <h3>About this project</h3>
                    <p>
                        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                    </p>
                    <p>
                        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
                    </p>
                </div>

                <!-- add cards here to automatically update all cards. This will be automatically updated -->
                <div class="card-container">
                    <%
                        for (RewardModel i : rewards) {
                    %><div class="card" data-min="<%= i.getMinPledge()%>" data-rewardID="<%= i.getRewardID()%>">
                        <div class="title">
                            <h5 class="card-title"><%= i.getName()%></h5>
                            <p class="card-subtitle">Pledge $<%= i.getMinPledge()%> or more</p>
                        </div>
                        <p class="card-body"><%= i.getDescription()%></p>
                        <div class="card-functions">
                            <span class="number"><%= i.getCount()%></span>
                            <button class="card-button backproject"></button>
                        </div>
                    </div>
                    <%}
                    %>
                </div>
                <!-- Stop -->

            </section>
        </main>
        <div id="float">
            <section id="project-select" class="">
                <div class="close"></div>
                <h1>Back this project</h1>
                <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                <div class="card" data-min="0">
                    <div class="title" id="default-pledge">
                        <div class="select"></div>
                        <h5 class="card-title">Pledge with no reward</h5>
                        <!-- <p class="card-subtitle">Hello world</p> -->
                    </div>
                    <p class="card-body">Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
                    <div class="pledge-amount">
                        <p>Enter your pledge</p>
                        <form action="BackprojectServlet" onsubmit="return validate(this);" method="POST" class="backproject-form">
                            <input type="text" name="amount" placeholder="$0" class="money-input" data-min="1">
                            <input type="submit" value="Continue" class="submit">
                            <input type="hidden" value="submit" name="method">
                            <input type="hidden" value="R000" name="rewardID">
                        </form>
                    </div>
                </div>
            </section>
            <section id="finished" class="">
                <img src="./images/icon-check.svg" alt="Check icon">
                <h1>Thanks for your support!</h1>
                <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
                <button>Got it!</button>
            </section>
        </div>
        <div class="template">
            <div class="pledge-amount">
                <p>Enter your pledge</p>
                <form action="BackprojectServlet" onsubmit="return validate(this);" method="POST" class="backproject-form">
                    <input type="text" name="amount" placeholder="$0" class="money-input" data-min="">
                    <input type="submit" value="Continue" class="submit">
                    <input type="hidden" value="submit" name="method">
                    <input type="hidden" value="" name="rewardID">
                </form>
            </div>
        </div>
        <script src="js/script.js"></script>
        <%
            @SuppressWarnings("all")
            boolean finished = Boolean.valueOf(request.getAttribute("finish") == null ? "false" : "true");
            if (finished) {
        %>
        <script>
            openFinishScreen();
        </script>
        <%}
        %>
    </body>

</html>