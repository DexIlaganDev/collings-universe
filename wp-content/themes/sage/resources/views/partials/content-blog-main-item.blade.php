<div class="col-12 py-md-5">
    <div class="row">

        <div class="col-md-5 d-flex justify-content-center align-items-center">
            <section class="">
                <h3 class="text-aqua blog-hot-title"><a class="text-aqua" href="<?php echo get_permalink(); ?>"><?php echo get_the_title() ?></a></h3>
                <article class="text-white">
                    <p class="text-white">
                        <?php 
                            echo get_the_excerpt();  
                        ?>
                    </p>
                </article>
            </section>
        </div>
        <div class="col-md-7">
            <section>
                <img class="img-fluid" src="<?php echo get_the_post_thumbnail_url()  ?>" alt="">
            </section>
        </div>

    </div>
</div>