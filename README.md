# README #
# easywizard
jQuery easy form wizard

### Using ###
```
<div class="easy-wizard-example">
    <div class="easywizard">
        <div class="easywizard-steps">
            <div class="easywizard-step" data-href="#s1">
                1
            </div>
            <div class="easywizard-step" data-href="#s2">
                2
            </div>
            <div class="easywizard-step" data-href="#s3">
                3
            </div>
            <div class="easywizard-step" data-href="#s4">
                4
            </div>
            <div class="easywizard-step" data-href="#s5">
                5
            </div>
        </div>
        <div class="easywizard-contents">
            <div class="easywizard-content" id="s1">
                content1
            </div>
            <div class="easywizard-content" id="s2">
                content 2
            </div>
            <div class="easywizard-content" id="s3">
                content 3
            </div>
            <div class="easywizard-content" id="s4">
                content 4
            </div>
            <div class="easywizard-content" id="s5">
                content 5
            </div>
        </div>
        <div class="easywizard-buttons">
            <button class="easywizard-btn prev">Prev</button>
            <button class="easywizard-btn next">Next</button>
        </div>
    </div>
</div>


<script>
  $(".easy-wizard-example").easyWizard();
</script>
```
