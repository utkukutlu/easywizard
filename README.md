# README #
# easywizard
jQuery easy form wizard

### Using ###
```
<div class="easy-wizard-example">
    <div class="easywizard">
        <form method="" action="">
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
            </div>
            <div class="easywizard-contents">
                <div class="easywizard-content" id="s1">
                    <h4>Step 1</h4>
                    <hr>
                    <div class="form-group">
                        <label>Site Adı:</label>
                        <input type="text" required>
                    </div>
                </div>
                <div class="easywizard-content" id="s2">
                    content 2
                </div>
                <div class="easywizard-content" id="s3">
                    <button type="submit">Submit</button>
                </div>

            </div>
            <div class="easywizard-buttons">
                <button class="easywizard-btn prev">Prev</button>
                <button class="easywizard-btn next">Next</button>
            </div>
        </form>
    </div>
</div>


<script>
  $(".easy-wizard-example").easyWizard();
</script>
```
