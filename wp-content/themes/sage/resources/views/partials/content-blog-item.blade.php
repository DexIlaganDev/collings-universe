<div class="col-sm-4">
    <img class="img-fluid" src="<?php echo get_the_post_thumbnail_url()  ?>" alt="">
    <p class="text-white blog-hot-title-two">
        <a class="text-white" href="<?php echo get_permalink(); ?>"><?php echo get_the_title() ?></a></p>
    <article>
        <p class="text-white">
        <?php echo get_the_excerpt() ?>
        </p>
    </article>
</div>