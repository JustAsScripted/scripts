.mCustomScrollBox {
  position: relative;
  overflow: hidden;
  height: 100%;
  max-width: 100%;
  outline: 0;
  direction: ltr;
  width: 100%;
}
.mCSB_container {
  overflow: hidden;
  width: auto;
  height: auto;
}
.mCSB_inside > .mCSB_container {
  margin-right: 30px;
}
.mCSB_container.mCS_no_scrollbar_y.mCS_y_hidden {
  margin-right: 0;
}
.mCS-dir-rtl > .mCSB_inside > .mCSB_container {
  margin-right: 0;
  margin-left: 30px;
}
.mCS-dir-rtl > .mCSB_inside > .mCSB_container.mCS_no_scrollbar_y.mCS_y_hidden {
  margin-left: 0;
}
.mCSB_scrollTools {
  position: absolute;
  width: 16px;
  height: auto;
  left: auto;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0.75;
  filter: 'alpha(opacity=75)';
  -ms-filter: 'alpha(opacity=75)';
}
.mCSB_outside + .mCSB_scrollTools {
  right: -26px;
}
.mCS-dir-rtl > .mCSB_inside > .mCSB_scrollTools,
.mCS-dir-rtl > .mCSB_outside + .mCSB_scrollTools {
  right: auto;
  left: 0;
}
.mCS-dir-rtl > .mCSB_outside + .mCSB_scrollTools {
  left: -26px;
}
.mCSB_scrollTools .mCSB_draggerContainer {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: auto;
}
.mCSB_scrollTools a + .mCSB_draggerContainer {
  margin: 20px 0;
}
.mCSB_scrollTools .mCSB_draggerRail {
  width: 2px;
  height: 100%;
  margin: 0 auto;
  border-radius: 16px;
}
.mCSB_scrollTools .mCSB_dragger {
  cursor: pointer;
  width: 100%;
  height: 30px;
  z-index: 1;
}
.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  position: relative;
  width: 4px;
  height: 100%;
  margin: 0 auto;
  border-radius: 16px;
  text-align: center;
}
.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar,
.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar {
  width: 12px;
}
.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail,
.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail {
  width: 8px;
}
.mCSB_scrollTools .mCSB_buttonDown,
.mCSB_scrollTools .mCSB_buttonUp {
  display: block;
  position: absolute;
  height: 20px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  cursor: pointer;
}
.mCSB_scrollTools .mCSB_buttonDown {
  bottom: 0;
}
.mCSB_horizontal.mCSB_inside > .mCSB_container {
  margin-right: 0;
  margin-bottom: 30px;
}
.mCSB_horizontal.mCSB_outside > .mCSB_container {
  min-height: 100%;
}
.mCSB_horizontal > .mCSB_container.mCS_no_scrollbar_x.mCS_x_hidden {
  margin-bottom: 0;
}
.mCSB_scrollTools.mCSB_scrollTools_horizontal {
  width: auto;
  height: 16px;
  top: auto;
  right: 0;
  bottom: 0;
  left: 0;
}
.mCustomScrollBox + .mCSB_scrollTools + .mCSB_scrollTools.mCSB_scrollTools_horizontal,
.mCustomScrollBox + .mCSB_scrollTools.mCSB_scrollTools_horizontal {
  bottom: -26px;
}
.mCSB_scrollTools.mCSB_scrollTools_horizontal a + .mCSB_draggerContainer {
  margin: 0 20px;
}
.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_draggerRail {
  width: 100%;
  height: 2px;
  margin: 7px 0;
}
.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_dragger {
  width: 30px;
  height: 100%;
  left: 0;
}
.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar {
  width: 100%;
  height: 4px;
  margin: 6px auto;
}
.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar,
.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar {
  height: 12px;
  margin: 2px auto;
}
.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail,
.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail {
  height: 8px;
  margin: 4px 0;
}
.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_buttonLeft,
.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_buttonRight {
  display: block;
  position: absolute;
  width: 20px;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  cursor: pointer;
}
.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_buttonLeft {
  left: 0;
}
.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_buttonRight {
  right: 0;
}
.mCSB_container_wrapper {
  position: absolute;
  height: auto;
  width: auto;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-right: 30px;
  margin-bottom: 30px;
}
.mCSB_container_wrapper > .mCSB_container {
  padding-right: 30px;
  padding-bottom: 30px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.mCSB_vertical_horizontal > .mCSB_scrollTools.mCSB_scrollTools_vertical {
  bottom: 20px;
}
.mCSB_vertical_horizontal > .mCSB_scrollTools.mCSB_scrollTools_horizontal {
  right: 20px;
}
.mCSB_container_wrapper.mCS_no_scrollbar_x.mCS_x_hidden + .mCSB_scrollTools.mCSB_scrollTools_vertical {
  bottom: 0;
}
.mCS-dir-rtl > .mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside > .mCSB_scrollTools.mCSB_scrollTools_horizontal,
.mCSB_container_wrapper.mCS_no_scrollbar_y.mCS_y_hidden + .mCSB_scrollTools ~ .mCSB_scrollTools.mCSB_scrollTools_horizontal {
  right: 0;
}
.mCS-dir-rtl > .mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside > .mCSB_scrollTools.mCSB_scrollTools_horizontal {
  left: 20px;
}
.mCS-dir-rtl > .mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside > .mCSB_container_wrapper.mCS_no_scrollbar_y.mCS_y_hidden + .mCSB_scrollTools ~ .mCSB_scrollTools.mCSB_scrollTools_horizontal {
  left: 0;
}
.mCS-dir-rtl > .mCSB_inside > .mCSB_container_wrapper {
  margin-right: 0;
  margin-left: 30px;
}
.mCSB_container_wrapper.mCS_no_scrollbar_y.mCS_y_hidden > .mCSB_container {
  padding-right: 0;
}
.mCSB_container_wrapper.mCS_no_scrollbar_x.mCS_x_hidden > .mCSB_container {
  padding-bottom: 0;
}
.mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside > .mCSB_container_wrapper.mCS_no_scrollbar_y.mCS_y_hidden {
  margin-right: 0;
  margin-left: 0;
}
.mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside > .mCSB_container_wrapper.mCS_no_scrollbar_x.mCS_x_hidden {
  margin-bottom: 0;
}
.mCSB_scrollTools,
.mCSB_scrollTools .mCSB_buttonDown,
.mCSB_scrollTools .mCSB_buttonLeft,
.mCSB_scrollTools .mCSB_buttonRight,
.mCSB_scrollTools .mCSB_buttonUp,
.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  -webkit-transition: opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
}
.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerRail,
.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger_bar,
.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerRail,
.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger_bar {
  -webkit-transition: width 0.2s ease-out 0.2s, height 0.2s ease-out 0.2s, margin-left 0.2s ease-out 0.2s, margin-right 0.2s ease-out 0.2s, margin-top 0.2s ease-out 0.2s, margin-bottom 0.2s ease-out 0.2s, opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
  transition: width 0.2s ease-out 0.2s, height 0.2s ease-out 0.2s, margin-left 0.2s ease-out 0.2s, margin-right 0.2s ease-out 0.2s, margin-top 0.2s ease-out 0.2s, margin-bottom 0.2s ease-out 0.2s, opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
}
.mCS-autoHide > .mCustomScrollBox > .mCSB_scrollTools,
.mCS-autoHide > .mCustomScrollBox ~ .mCSB_scrollTools {
  opacity: 0;
  filter: 'alpha(opacity=0)';
  -ms-filter: 'alpha(opacity=0)';
}
.mCS-autoHide:hover > .mCustomScrollBox > .mCSB_scrollTools,
.mCS-autoHide:hover > .mCustomScrollBox ~ .mCSB_scrollTools,
.mCustomScrollBox:hover > .mCSB_scrollTools,
.mCustomScrollBox:hover ~ .mCSB_scrollTools,
.mCustomScrollbar > .mCustomScrollBox > .mCSB_scrollTools.mCSB_scrollTools_onDrag,
.mCustomScrollbar > .mCustomScrollBox ~ .mCSB_scrollTools.mCSB_scrollTools_onDrag {
  opacity: 1;
  filter: 'alpha(opacity=100)';
  -ms-filter: 'alpha(opacity=100)';
}
.mCSB_scrollTools .mCSB_draggerRail {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.4);
  filter: 'alpha(opacity=40)';
  -ms-filter: 'alpha(opacity=40)';
}
.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.75);
  filter: 'alpha(opacity=75)';
  -ms-filter: 'alpha(opacity=75)';
}
.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.85);
  filter: 'alpha(opacity=85)';
  -ms-filter: 'alpha(opacity=85)';
}
.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,
.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.9);
  filter: 'alpha(opacity=90)';
  -ms-filter: 'alpha(opacity=90)';
}
.mCSB_scrollTools .mCSB_buttonDown,
.mCSB_scrollTools .mCSB_buttonLeft,
.mCSB_scrollTools .mCSB_buttonRight,
.mCSB_scrollTools .mCSB_buttonUp {
  background-image: url(mCSB_buttons.png);
  background-repeat: no-repeat;
  opacity: 0.4;
  filter: 'alpha(opacity=40)';
  -ms-filter: 'alpha(opacity=40)';
}
.mCSB_scrollTools .mCSB_buttonUp {
  background-position: 0 0;
}
.mCSB_scrollTools .mCSB_buttonDown {
  background-position: 0 -20px;
}
.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: 0 -40px;
}
.mCSB_scrollTools .mCSB_buttonRight {
  background-position: 0 -56px;
}
.mCSB_scrollTools .mCSB_buttonDown:hover,
.mCSB_scrollTools .mCSB_buttonLeft:hover,
.mCSB_scrollTools .mCSB_buttonRight:hover,
.mCSB_scrollTools .mCSB_buttonUp:hover {
  opacity: 0.75;
  filter: 'alpha(opacity=75)';
  -ms-filter: 'alpha(opacity=75)';
}
.mCSB_scrollTools .mCSB_buttonDown:active,
.mCSB_scrollTools .mCSB_buttonLeft:active,
.mCSB_scrollTools .mCSB_buttonRight:active,
.mCSB_scrollTools .mCSB_buttonUp:active {
  opacity: 0.9;
  filter: 'alpha(opacity=90)';
  -ms-filter: 'alpha(opacity=90)';
}
.mCS-dark.mCSB_scrollTools .mCSB_draggerRail {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.15);
}
.mCS-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.75);
}
.mCS-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: rgba(0, 0, 0, 0.85);
}
.mCS-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,
.mCS-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar {
  background-color: rgba(0, 0, 0, 0.9);
}
.mCS-dark.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -80px 0;
}
.mCS-dark.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -80px -20px;
}
.mCS-dark.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -80px -40px;
}
.mCS-dark.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -80px -56px;
}
.mCS-dark-2.mCSB_scrollTools .mCSB_draggerRail,
.mCS-light-2.mCSB_scrollTools .mCSB_draggerRail {
  width: 4px;
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 1px;
}
.mCS-dark-2.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-light-2.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width: 4px;
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 1px;
}
.mCS-dark-2.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-dark-2.mCSB_scrollTools_horizontal .mCSB_draggerRail,
.mCS-light-2.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-light-2.mCSB_scrollTools_horizontal .mCSB_draggerRail {
  width: 100%;
  height: 4px;
  margin: 6px auto;
}
.mCS-light-2.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.85);
}
.mCS-light-2.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,
.mCS-light-2.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.9);
}
.mCS-light-2.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -32px 0;
}
.mCS-light-2.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -32px -20px;
}
.mCS-light-2.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -40px -40px;
}
.mCS-light-2.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -40px -56px;
}
.mCS-dark-2.mCSB_scrollTools .mCSB_draggerRail {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 1px;
}
.mCS-dark-2.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 1px;
}
.mCS-dark-2.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.85);
}
.mCS-dark-2.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,
.mCS-dark-2.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.9);
}
.mCS-dark-2.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -112px 0;
}
.mCS-dark-2.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -112px -20px;
}
.mCS-dark-2.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -120px -40px;
}
.mCS-dark-2.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -120px -56px;
}
.mCS-dark-thick.mCSB_scrollTools .mCSB_draggerRail,
.mCS-light-thick.mCSB_scrollTools .mCSB_draggerRail {
  width: 4px;
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}
.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-light-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width: 6px;
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 2px;
}
.mCS-dark-thick.mCSB_scrollTools_horizontal .mCSB_draggerRail,
.mCS-light-thick.mCSB_scrollTools_horizontal .mCSB_draggerRail {
  width: 100%;
  height: 4px;
  margin: 6px 0;
}
.mCS-dark-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-light-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar {
  width: 100%;
  height: 6px;
  margin: 5px auto;
}
.mCS-light-thick.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.85);
}
.mCS-light-thick.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,
.mCS-light-thick.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.9);
}
.mCS-light-thick.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -16px 0;
}
.mCS-light-thick.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -16px -20px;
}
.mCS-light-thick.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -20px -40px;
}
.mCS-light-thick.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -20px -56px;
}
.mCS-dark-thick.mCSB_scrollTools .mCSB_draggerRail {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}
.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 2px;
}
.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.85);
}
.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,
.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.9);
}
.mCS-dark-thick.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -96px 0;
}
.mCS-dark-thick.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -96px -20px;
}
.mCS-dark-thick.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -100px -40px;
}
.mCS-dark-thick.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -100px -56px;
}
.mCS-light-thin.mCSB_scrollTools .mCSB_draggerRail {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
}
.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-light-thin.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width: 2px;
}
.mCS-dark-thin.mCSB_scrollTools_horizontal .mCSB_draggerRail,
.mCS-light-thin.mCSB_scrollTools_horizontal .mCSB_draggerRail {
  width: 100%;
}
.mCS-dark-thin.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-light-thin.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar {
  width: 100%;
  height: 2px;
  margin: 7px auto;
}
.mCS-dark-thin.mCSB_scrollTools .mCSB_draggerRail {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.15);
}
.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.75);
}
.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.85);
}
.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,
.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.9);
}
.mCS-dark-thin.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -80px 0;
}
.mCS-dark-thin.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -80px -20px;
}
.mCS-dark-thin.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -80px -40px;
}
.mCS-dark-thin.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -80px -56px;
}
.mCS-rounded.mCSB_scrollTools .mCSB_draggerRail {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.15);
}
.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger,
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger,
.mCS-rounded-dots.mCSB_scrollTools .mCSB_dragger,
.mCS-rounded.mCSB_scrollTools .mCSB_dragger {
  height: 14px;
}
.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-rounded-dots.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-rounded.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width: 14px;
  margin: 0 1px;
}
.mCS-rounded-dark.mCSB_scrollTools_horizontal .mCSB_dragger,
.mCS-rounded-dots-dark.mCSB_scrollTools_horizontal .mCSB_dragger,
.mCS-rounded-dots.mCSB_scrollTools_horizontal .mCSB_dragger,
.mCS-rounded.mCSB_scrollTools_horizontal .mCSB_dragger {
  width: 14px;
}
.mCS-rounded-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-rounded-dots-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-rounded-dots.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-rounded.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar {
  height: 14px;
  margin: 1px 0;
}
.mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar,
.mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar,
.mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar,
.mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar {
  width: 16px;
  height: 16px;
  margin: -1px 0;
}
.mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail,
.mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail,
.mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail,
.mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail {
  width: 4px;
}
.mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar,
.mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar,
.mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar,
.mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar {
  height: 16px;
  width: 16px;
  margin: 0 -1px;
}
.mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail,
.mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail,
.mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail,
.mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail {
  height: 4px;
  margin: 6px 0;
}
.mCS-rounded.mCSB_scrollTools .mCSB_buttonUp {
  background-position: 0 -72px;
}
.mCS-rounded.mCSB_scrollTools .mCSB_buttonDown {
  background-position: 0 -92px;
}
.mCS-rounded.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: 0 -112px;
}
.mCS-rounded.mCSB_scrollTools .mCSB_buttonRight {
  background-position: 0 -128px;
}
.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.75);
}
.mCS-rounded-dark.mCSB_scrollTools .mCSB_draggerRail {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.15);
}
.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar,
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.85);
}
.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,
.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.9);
}
.mCS-rounded-dark.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -80px -72px;
}
.mCS-rounded-dark.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -80px -92px;
}
.mCS-rounded-dark.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -80px -112px;
}
.mCS-rounded-dark.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -80px -128px;
}
.mCS-rounded-dots-dark.mCSB_scrollTools_vertical .mCSB_draggerRail,
.mCS-rounded-dots.mCSB_scrollTools_vertical .mCSB_draggerRail {
  width: 4px;
}
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_draggerRail,
.mCS-rounded-dots-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail,
.mCS-rounded-dots.mCSB_scrollTools .mCSB_draggerRail,
.mCS-rounded-dots.mCSB_scrollTools_horizontal .mCSB_draggerRail {
  background-color: transparent;
  background-position: center;
}
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_draggerRail,
.mCS-rounded-dots.mCSB_scrollTools .mCSB_draggerRail {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANElEQVQYV2NkIAAYiVbw//9/Y6DiM1ANJoyMjGdBbLgJQAX/kU0DKgDLkaQAvxW4HEvQFwCRcxIJK1XznAAAAABJRU5ErkJggg==);
  background-repeat: repeat-y;
  opacity: 0.3;
  filter: 'alpha(opacity=30)';
  -ms-filter: 'alpha(opacity=30)';
}
.mCS-rounded-dots-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail,
.mCS-rounded-dots.mCSB_scrollTools_horizontal .mCSB_draggerRail {
  height: 4px;
  margin: 6px 0;
  background-repeat: repeat-x;
}
.mCS-rounded-dots.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -16px -72px;
}
.mCS-rounded-dots.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -16px -92px;
}
.mCS-rounded-dots.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -20px -112px;
}
.mCS-rounded-dots.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -20px -128px;
}
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_draggerRail {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALElEQVQYV2NkIAAYSVFgDFR8BqrBBEifBbGRTfiPZhpYjiQFBK3A6l6CvgAAE9kGCd1mvgEAAAAASUVORK5CYII=);
}
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -96px -72px;
}
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -96px -92px;
}
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -100px -112px;
}
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -100px -128px;
}
.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-repeat: repeat-y;
  background-image: -webkit-gradient(linear, left top, right top, color-stop(0, rgba(255, 255, 255, 0.5)), to(rgba(255, 255, 255, 0)));
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.5) 0, rgba(255, 255, 255, 0) 100%);
}
.mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d-thick-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar {
  background-repeat: repeat-x;
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(255, 255, 255, 0.5)), to(rgba(255, 255, 255, 0)));
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0, rgba(255, 255, 255, 0) 100%);
}
.mCS-3d-dark.mCSB_scrollTools_vertical .mCSB_dragger,
.mCS-3d.mCSB_scrollTools_vertical .mCSB_dragger {
  height: 70px;
}
.mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_dragger,
.mCS-3d.mCSB_scrollTools_horizontal .mCSB_dragger {
  width: 70px;
}
.mCS-3d-dark.mCSB_scrollTools,
.mCS-3d.mCSB_scrollTools {
  opacity: 1;
  filter: 'alpha(opacity=30)';
  -ms-filter: 'alpha(opacity=30)';
}
.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d-dark.mCSB_scrollTools .mCSB_draggerRail,
.mCS-3d.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d.mCSB_scrollTools .mCSB_draggerRail {
  border-radius: 16px;
}
.mCS-3d-dark.mCSB_scrollTools .mCSB_draggerRail,
.mCS-3d.mCSB_scrollTools .mCSB_draggerRail {
  width: 8px;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: inset 1px 0 1px rgba(0, 0, 0, 0.5), inset -1px 0 1px rgba(255, 255, 255, 0.2);
          box-shadow: inset 1px 0 1px rgba(0, 0, 0, 0.5), inset -1px 0 1px rgba(255, 255, 255, 0.2);
}
.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,
.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar,
.mCS-3d.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,
.mCS-3d.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-3d.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: #555;
}
.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width: 8px;
}
.mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail,
.mCS-3d.mCSB_scrollTools_horizontal .mCSB_draggerRail {
  width: 100%;
  height: 8px;
  margin: 4px 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.5), inset 0 -1px 1px rgba(255, 255, 255, 0.2);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.5), inset 0 -1px 1px rgba(255, 255, 255, 0.2);
}
.mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar {
  width: 100%;
  height: 8px;
  margin: 4px auto;
}
.mCS-3d.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -32px -72px;
}
.mCS-3d.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -32px -92px;
}
.mCS-3d.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -40px -112px;
}
.mCS-3d.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -40px -128px;
}
.mCS-3d-dark.mCSB_scrollTools .mCSB_draggerRail {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset 1px 0 1px rgba(0, 0, 0, 0.1);
          box-shadow: inset 1px 0 1px rgba(0, 0, 0, 0.1);
}
.mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail {
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);
}
.mCS-3d-dark.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -112px -72px;
}
.mCS-3d-dark.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -112px -92px;
}
.mCS-3d-dark.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -120px -112px;
}
.mCS-3d-dark.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -120px -128px;
}
.mCS-3d-thick-dark.mCSB_scrollTools,
.mCS-3d-thick.mCSB_scrollTools {
  opacity: 1;
  filter: 'alpha(opacity=30)';
  -ms-filter: 'alpha(opacity=30)';
}
.mCS-3d-thick-dark.mCSB_scrollTools,
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_draggerContainer,
.mCS-3d-thick.mCSB_scrollTools,
.mCS-3d-thick.mCSB_scrollTools .mCSB_draggerContainer {
  border-radius: 7px;
}
.mCSB_inside + .mCS-3d-thick-dark.mCSB_scrollTools_vertical,
.mCSB_inside + .mCS-3d-thick.mCSB_scrollTools_vertical {
  right: 1px;
}
.mCS-3d-thick-dark.mCSB_scrollTools_vertical,
.mCS-3d-thick.mCSB_scrollTools_vertical {
  -webkit-box-shadow: inset 1px 0 1px rgba(0, 0, 0, 0.1), inset 0 0 14px rgba(0, 0, 0, 0.5);
          box-shadow: inset 1px 0 1px rgba(0, 0, 0, 0.1), inset 0 0 14px rgba(0, 0, 0, 0.5);
}
.mCS-3d-thick-dark.mCSB_scrollTools_horizontal,
.mCS-3d-thick.mCSB_scrollTools_horizontal {
  bottom: 1px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1), inset 0 0 14px rgba(0, 0, 0, 0.5);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1), inset 0 0 14px rgba(0, 0, 0, 0.5);
}
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  border-radius: 5px;
  -webkit-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.4);
          box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.4);
  width: 12px;
  margin: 2px;
  position: absolute;
  height: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.mCS-3d-thick-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar {
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4);
  height: 12px;
  width: auto;
}
.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,
.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: #555;
}
.mCS-3d-thick.mCSB_scrollTools .mCSB_draggerContainer {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: inset 1px 1px 16px rgba(0, 0, 0, 0.1);
          box-shadow: inset 1px 1px 16px rgba(0, 0, 0, 0.1);
}
.mCS-3d-thick.mCSB_scrollTools .mCSB_draggerRail {
  background-color: transparent;
}
.mCS-3d-thick.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -32px -72px;
}
.mCS-3d-thick.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -32px -92px;
}
.mCS-3d-thick.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -40px -112px;
}
.mCS-3d-thick.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -40px -128px;
}
.mCS-3d-thick-dark.mCSB_scrollTools {
  -webkit-box-shadow: inset 0 0 14px rgba(0, 0, 0, 0.2);
          box-shadow: inset 0 0 14px rgba(0, 0, 0, 0.2);
}
.mCS-3d-thick-dark.mCSB_scrollTools_horizontal {
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1), inset 0 0 14px rgba(0, 0, 0, 0.2);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1), inset 0 0 14px rgba(0, 0, 0, 0.2);
}
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  -webkit-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.4), inset -1px 0 0 rgba(0, 0, 0, 0.2);
          box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.4), inset -1px 0 0 rgba(0, 0, 0, 0.2);
}
.mCS-3d-thick-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar {
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.2);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.2);
}
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: #777;
}
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_draggerContainer {
  background-color: #fff;
  background-color: rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: inset 1px 1px 16px rgba(0, 0, 0, 0.1);
          box-shadow: inset 1px 1px 16px rgba(0, 0, 0, 0.1);
}
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_draggerRail,
.mCS-minimal-dark.mCSB_scrollTools .mCSB_draggerRail,
.mCS-minimal.mCSB_scrollTools .mCSB_draggerRail {
  background-color: transparent;
}
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -112px -72px;
}
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -112px -92px;
}
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -120px -112px;
}
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -120px -128px;
}
.mCSB_outside + .mCS-minimal-dark.mCSB_scrollTools_vertical,
.mCSB_outside + .mCS-minimal.mCSB_scrollTools_vertical {
  right: 0;
  margin: 12px 0;
}
.mCustomScrollBox.mCS-minimal + .mCSB_scrollTools + .mCSB_scrollTools.mCSB_scrollTools_horizontal,
.mCustomScrollBox.mCS-minimal + .mCSB_scrollTools.mCSB_scrollTools_horizontal,
.mCustomScrollBox.mCS-minimal-dark + .mCSB_scrollTools + .mCSB_scrollTools.mCSB_scrollTools_horizontal,
.mCustomScrollBox.mCS-minimal-dark + .mCSB_scrollTools.mCSB_scrollTools_horizontal {
  bottom: 0;
  margin: 0 12px;
}
.mCS-dir-rtl > .mCSB_outside + .mCS-minimal-dark.mCSB_scrollTools_vertical,
.mCS-dir-rtl > .mCSB_outside + .mCS-minimal.mCSB_scrollTools_vertical {
  left: 0;
  right: auto;
}
.mCS-minimal-dark.mCSB_scrollTools_vertical .mCSB_dragger,
.mCS-minimal.mCSB_scrollTools_vertical .mCSB_dragger {
  height: 50px;
}
.mCS-minimal-dark.mCSB_scrollTools_horizontal .mCSB_dragger,
.mCS-minimal.mCSB_scrollTools_horizontal .mCSB_dragger {
  width: 50px;
}
.mCS-minimal.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
  filter: 'alpha(opacity=20)';
  -ms-filter: 'alpha(opacity=20)';
}
.mCS-minimal.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,
.mCS-minimal.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.5);
  filter: 'alpha(opacity=50)';
  -ms-filter: 'alpha(opacity=50)';
}
.mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.2);
  filter: 'alpha(opacity=20)';
  -ms-filter: 'alpha(opacity=20)';
}
.mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,
.mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.5);
  filter: 'alpha(opacity=50)';
  -ms-filter: 'alpha(opacity=50)';
}
.mCS-dark-3.mCSB_scrollTools .mCSB_draggerRail,
.mCS-light-3.mCSB_scrollTools .mCSB_draggerRail {
  width: 6px;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.2);
}
.mCS-dark-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-light-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width: 6px;
}
.mCS-dark-3.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-dark-3.mCSB_scrollTools_horizontal .mCSB_draggerRail,
.mCS-light-3.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-light-3.mCSB_scrollTools_horizontal .mCSB_draggerRail {
  width: 100%;
  height: 6px;
  margin: 5px 0;
}
.mCS-dark-3.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail,
.mCS-dark-3.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail,
.mCS-light-3.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail,
.mCS-light-3.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail {
  width: 12px;
}
.mCS-dark-3.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail,
.mCS-dark-3.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail,
.mCS-light-3.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail,
.mCS-light-3.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail {
  height: 12px;
  margin: 2px 0;
}
.mCS-light-3.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -32px -72px;
}
.mCS-light-3.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -32px -92px;
}
.mCS-light-3.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -40px -112px;
}
.mCS-light-3.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -40px -128px;
}
.mCS-dark-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.75);
}
.mCS-dark-3.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.85);
}
.mCS-dark-3.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,
.mCS-dark-3.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.9);
}
.mCS-dark-3.mCSB_scrollTools .mCSB_draggerRail {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.1);
}
.mCS-dark-3.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -112px -72px;
}
.mCS-dark-3.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -112px -92px;
}
.mCS-dark-3.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -120px -112px;
}
.mCS-dark-3.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -120px -128px;
}
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_draggerRail,
.mCS-inset-2.mCSB_scrollTools .mCSB_draggerRail,
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_draggerRail,
.mCS-inset-3.mCSB_scrollTools .mCSB_draggerRail,
.mCS-inset-dark.mCSB_scrollTools .mCSB_draggerRail,
.mCS-inset.mCSB_scrollTools .mCSB_draggerRail {
  width: 12px;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.2);
}
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-inset-2.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-inset-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-inset.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width: 6px;
  margin: 3px 5px;
  position: absolute;
  height: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.mCS-inset-2-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-inset-2.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-inset-3-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-inset-3.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-inset-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-inset.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar {
  height: 6px;
  margin: 5px 3px;
  position: absolute;
  width: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.mCS-inset-2-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail,
.mCS-inset-2.mCSB_scrollTools_horizontal .mCSB_draggerRail,
.mCS-inset-3-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail,
.mCS-inset-3.mCSB_scrollTools_horizontal .mCSB_draggerRail,
.mCS-inset-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail,
.mCS-inset.mCSB_scrollTools_horizontal .mCSB_draggerRail {
  width: 100%;
  height: 12px;
  margin: 2px 0;
}
.mCS-inset-2.mCSB_scrollTools .mCSB_buttonUp,
.mCS-inset-3.mCSB_scrollTools .mCSB_buttonUp,
.mCS-inset.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -32px -72px;
}
.mCS-inset-2.mCSB_scrollTools .mCSB_buttonDown,
.mCS-inset-3.mCSB_scrollTools .mCSB_buttonDown,
.mCS-inset.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -32px -92px;
}
.mCS-inset-2.mCSB_scrollTools .mCSB_buttonLeft,
.mCS-inset-3.mCSB_scrollTools .mCSB_buttonLeft,
.mCS-inset.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -40px -112px;
}
.mCS-inset-2.mCSB_scrollTools .mCSB_buttonRight,
.mCS-inset-3.mCSB_scrollTools .mCSB_buttonRight,
.mCS-inset.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -40px -128px;
}
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.75);
}
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar,
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar,
.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.85);
}
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,
.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.9);
}
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_draggerRail,
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_draggerRail,
.mCS-inset-dark.mCSB_scrollTools .mCSB_draggerRail {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.1);
}
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_buttonUp,
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_buttonUp,
.mCS-inset-dark.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -112px -72px;
}
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_buttonDown,
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_buttonDown,
.mCS-inset-dark.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -112px -92px;
}
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_buttonLeft,
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_buttonLeft,
.mCS-inset-dark.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -120px -112px;
}
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_buttonRight,
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_buttonRight,
.mCS-inset-dark.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -120px -128px;
}
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_draggerRail,
.mCS-inset-2.mCSB_scrollTools .mCSB_draggerRail {
  background-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: #fff;
  border-color: rgba(255, 255, 255, 0.2);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_draggerRail {
  border-color: #000;
  border-color: rgba(0, 0, 0, 0.2);
}
.mCS-inset-3.mCSB_scrollTools .mCSB_draggerRail {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.6);
}
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_draggerRail {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.6);
}
.mCS-inset-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.75);
}
.mCS-inset-3.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.85);
}
.mCS-inset-3.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,
.mCS-inset-3.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.9);
}
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.75);
}
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.85);
}
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.9);
}
.uss_privacy_policy_wrap {
  color: #212121;
}
.aside-banner .banner-link {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10 !important;
}
.uss-flex-items {
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -webkit-box-pack: start !important;
      -ms-flex-pack: start !important;
          justify-content: flex-start !important;
  -ms-flex-wrap: wrap !important;
      flex-wrap: wrap !important;
  width: 100% !important;
}
.jq-selectbox {
  z-index: 10 !important;
}
.uss_photoalbums_foto_box {
  margin: 0;
}
.buy_one_click_window_wrap {
  -webkit-box-sizing: content-box;
          box-sizing: content-box;
}
.buy_one_click_window_wrap form .group .fc_item .elem_item {
  max-width: 100%;
}
.catalog_orderform_tml .catalog_orderform_window_wrap {
  -webkit-box-sizing: content-box;
          box-sizing: content-box;
}
.catalog_orderform_tml .catalog_orderform_window_wrap form .group .fc_item .elem_item {
  max-width: 100%;
}
.catalog_orderform_tml .catalog_orderform_window_wrap form .group .fc_item.fc_checkbox .elem_item {
  width: auto !important;
}
.uss_widget_outer_content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
  width: 100%;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
.uss_widget_outer_content {
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  max-width: 100%;
}
a[href^="tel:"],
a[href^="tel:"]:hover {
  white-space: nowrap !important;
  color: inherit !important;
  text-decoration: none !important;
}
.price_zero_class {
  white-space: normal !important;
  font-size: 12px !important;
  line-height: 1 !important;
}
.uss_user_basket,
.uss_user_wishlist,
.uss_user_basket *,
.uss_user_wishlist * {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
.uss_user_basket table tr td.uss_name,
.uss_user_wishlist table tr td.uss_name {
  line-height: 1.2;
}
.uss_user_basket table tr td.uss_name .uss_title,
.uss_user_wishlist table tr td.uss_name .uss_title {
  height: auto;
  line-height: 1.35;
}
.uss_user_basket table tr td.uss_name .uss_description,
.uss_user_wishlist table tr td.uss_name .uss_description {
  line-height: 1.35;
  height: auto;
}
.uss_user_basket table tr td.uss_number input,
.uss_user_wishlist table tr td.uss_number input {
  min-width: 30px;
  height: 30px;
  border: 1px solid #e2e4e6;
  text-align: center;
}
.uss_user_basket table tr td.uss_delete_pos,
.uss_user_wishlist table tr td.uss_delete_pos {
  position: relative;
  padding-right: 20px;
}
.uss_user_basket table tr td.uss_delete_pos .del_wish,
.uss_user_wishlist table tr td.uss_delete_pos .del_wish,
.uss_user_basket table tr td.uss_delete_pos .del_basket_item,
.uss_user_wishlist table tr td.uss_delete_pos .del_basket_item {
  position: absolute;
  right: 5px;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}
@media (max-width: 768px) {
  .uss_user_basket,
  .uss_user_wishlist {
    display: block;
  }
  .uss_user_basket .hide,
  .uss_user_wishlist .hide {
    display: none !important;
  }
  .uss_user_basket > table,
  .uss_user_wishlist > table {
    display: block;
    border-right: 1px solid #ccc;
  }
  .uss_user_basket > table > tbody,
  .uss_user_wishlist > table > tbody {
    display: block;
  }
  .uss_user_basket > table > tbody > tr,
  .uss_user_wishlist > table > tbody > tr {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    padding-bottom: 5px;
  }
  .uss_user_basket > table > tbody > tr + tr > td.uss_image,
  .uss_user_wishlist > table > tbody > tr + tr > td.uss_image {
    padding-top: 10px !important;
  }
  .uss_user_basket > table > tbody > tr + tr > td.uss_name,
  .uss_user_wishlist > table > tbody > tr + tr > td.uss_name {
    padding-top: 10px !important;
  }
  .uss_user_basket > table > tbody > tr:not(.total_sum),
  .uss_user_wishlist > table > tbody > tr:not(.total_sum) {
    padding-right: 5px;
    padding-left: 5px;
  }
  .uss_user_basket > table > tbody > tr:first-child,
  .uss_user_wishlist > table > tbody > tr:first-child {
    display: none;
  }
  .uss_user_basket > table > tbody > tr:not(.hide),
  .uss_user_wishlist > table > tbody > tr:not(.hide) {
    border-bottom: 1px solid #ccc;
  }
  .uss_user_basket > table > tbody > tr th,
  .uss_user_wishlist > table > tbody > tr th {
    display: none;
  }
  .uss_user_basket > table > tbody > tr td,
  .uss_user_wishlist > table > tbody > tr td {
    display: inline-block;
    vertical-align: middle;
    width: auto;
    border: none;
  }
  .uss_user_basket > table > tbody > tr td.uss_image,
  .uss_user_wishlist > table > tbody > tr td.uss_image {
    float: left;
    padding-left: 0 !important;
    -webkit-box-flex: 0;
        -ms-flex: 0 100px;
            flex: 0 100px;
    border: none !important;
    padding-top: 5px !important;
    padding-left: 5px !important;
  }
  .uss_user_basket > table > tbody > tr td.uss_name,
  .uss_user_wishlist > table > tbody > tr td.uss_name {
    -webkit-box-flex: 1;
        -ms-flex: 1 calc(100% - 100px);
            flex: 1 calc(100% - 100px);
    display: block;
    width: auto;
    padding: 0;
    white-space: normal;
  }
  .uss_user_basket > table > tbody > tr td.uss_name .uss_description,
  .uss_user_wishlist > table > tbody > tr td.uss_name .uss_description {
    line-height: 1.2em;
  }
  .uss_user_basket > table > tbody > tr td.uss_name .uss_title,
  .uss_user_wishlist > table > tbody > tr td.uss_name .uss_title {
    font-size: 17px;
  }
  .uss_user_basket > table > tbody > tr td.uss_name .uss_description,
  .uss_user_wishlist > table > tbody > tr td.uss_name .uss_description {
    font-size: 14px;
  }
  .uss_user_basket > table > tbody > tr td.uss_name > *,
  .uss_user_wishlist > table > tbody > tr td.uss_name > * {
    margin-bottom: 7px;
  }
  .uss_user_basket > table > tbody > tr td.uss_name ~ *,
  .uss_user_wishlist > table > tbody > tr td.uss_name ~ * {
    padding-bottom: 5px;
    padding-top: 5px;
  }
  .uss_user_basket > table > tbody > tr td.uss_price_field,
  .uss_user_wishlist > table > tbody > tr td.uss_price_field {
    font-size: 20px;
    font-weight: bold;
  }
  .uss_user_basket > table > tbody > tr td.uss_price_field:not(.uss_sum_field),
  .uss_user_wishlist > table > tbody > tr td.uss_price_field:not(.uss_sum_field) {
    display: none !important;
  }
  .uss_user_basket > table > tbody > tr td:not(.uss_name),
  .uss_user_wishlist > table > tbody > tr td:not(.uss_name) {
    display: inline-block;
    vertical-align: middle;
    width: auto;
  }
  .uss_user_basket > table > tbody > tr td:not(.uss_name) *:not(input),
  .uss_user_wishlist > table > tbody > tr td:not(.uss_name) *:not(input) {
    border: none;
  }
  .uss_user_basket > table > tbody > tr td.totals,
  .uss_user_wishlist > table > tbody > tr td.totals {
    display: block;
    width: 100%;
  }
  .uss_user_basket > table > tbody > tr td.uss_number,
  .uss_user_wishlist > table > tbody > tr td.uss_number {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .uss_user_basket > table > tbody > tr td.uss_number a.uss_plus,
  .uss_user_wishlist > table > tbody > tr td.uss_number a.uss_plus,
  .uss_user_basket > table > tbody > tr td.uss_number a.uss_minus,
  .uss_user_wishlist > table > tbody > tr td.uss_number a.uss_minus {
    width: auto;
    height: auto;
    font-size: 40px;
    padding: 0 9px;
    line-height: 1;
  }
  .uss_user_basket > table > tbody > tr td.uss_number input,
  .uss_user_wishlist > table > tbody > tr td.uss_number input {
    min-width: 30px;
    height: 30px;
    border: 1px solid #e2e4e6;
    text-align: center;
  }
  .uss_user_basket > table > tbody > tr td.uss_delete_pos,
  .uss_user_wishlist > table > tbody > tr td.uss_delete_pos {
    font-size: 16px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    position: relative;
    padding-right: 30px !important;
  }
  .uss_user_basket > table > tbody > tr td.uss_delete_pos a,
  .uss_user_wishlist > table > tbody > tr td.uss_delete_pos a {
    margin: 0;
  }
  .uss_user_basket > table > tbody > tr td.uss_delete_pos a + a,
  .uss_user_wishlist > table > tbody > tr td.uss_delete_pos a + a {
    margin-left: 9px;
    margin-right: 3px;
  }
  .uss_user_basket > table > tbody > tr td.uss_delete_pos a img,
  .uss_user_wishlist > table > tbody > tr td.uss_delete_pos a img {
    width: 15px;
    height: 15px;
    display: block;
    margin: 0;
  }
  .uss_user_basket > table > tbody > tr td.uss_delete_pos a.uss_pos_buttons,
  .uss_user_wishlist > table > tbody > tr td.uss_delete_pos a.uss_pos_buttons {
    font-size: 17px;
    display: inline-block;
    padding: 0 5px;
    vertical-align: middle;
  }
  #wrap .uss_user_wishlist > table > tbody > tr td.uss_price_field {
    display: block !important;
  }
  .uss_user_wishlist > table > tbody > tr {
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  .uss_user_wishlist > table > tbody > tr td.uss_delete_pos > a {
    margin-left: 5px;
  }
  .section_basket2 .fc_form_tml .group .fc_item.block {
    width: 100% !important;
  }
}
.uss-copyright.kzsite .uss-copyright_text {
  overflow: hidden;
}
.uss-copyright.kzsite .uss-copyright_text span,
.uss-copyright.kzsite .uss-copyright_text strong {
  margin-left: 0;
}
.uss_catlog_cat_anons ul,
.uss_tree_description ul {
  list-style-type: disc;
}
.uss_catlog_cat_anons ul,
.uss_tree_description ul,
.uss_catlog_cat_anons ol,
.uss_tree_description ol {
  padding: 0 0 0 19px;
  margin: 5px 0 5px 0;
  text-align: left;
}
.uss_catlog_cat_anons ul a,
.uss_tree_description ul a,
.uss_catlog_cat_anons ol a,
.uss_tree_description ol a {
  color: inherit !important;
  font-size: inherit !important;
}
.section_photoalbums .uss_photoalbums_foto_box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
}
.section_photoalbums .uss_photoalbums_foto_box .uss_img_item {
  max-width: 100%;
  display: block;
  margin-left: 0;
  margin-right: 0;
  overflow: hidden;
}
.section_photoalbums .uss_photoalbums_foto_box .uss_img_item .uss_img_pre {
  max-width: 100%;
  height: auto !important;
  display: block;
}
.section_photoalbums .uss_photoalbums_foto_box .uss_img_item .uss_img_pre img {
  max-width: 100%;
  height: auto;
  display: block;
}
.section_photoalbums .uss_photoalbums_foto_mosaic .uss_img_item {
  max-width: 100%;
}
.section_photoalbums .uss_photoalbums_foto_mosaic .uss_img_item img {
  display: block;
  max-width: 100%;
}
.section_photoalbums .uss_photoalbums_foto_list .uss_img_item .uss_img_pre {
  max-width: 100%;
  display: block;
  height: auto !important;
}
.section_photoalbums .uss_photoalbums_foto_list .uss_img_item .uss_img_pre img {
  max-width: 100%;
}
@media (max-width: 768px) {
  .fc_form_tml .group .fc_item.block {
    width: 100% !important;
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
}
@media (max-width: 540px) {
  .uss_basket_menu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
  }
  .uss_basket_menu > * {
    margin: 7px 0 !important;
    padding: 0 !important;
  }
  .uss_basket_menu > * + * {
    margin-top: 0 !important;
  }
}
@media (max-width: 600px) {
  .uss_shop_detail_350_right .uss_img_wrapper {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding-bottom: 10px;
    row-gap: 10px;
  }
  .uss_shop_detail_350_right .uss_img_wrapper .uss_img_big {
    float: none;
    margin-bottom: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    position: relative;
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 0 !important;
  }
  .uss_shop_detail_350_right .uss_img_wrapper .uss_img_big .uss_img_big_image {
    position: relative;
  }
  .uss_shop_detail_350_right .uss_img_wrapper .uss_img_ico_box.column {
    float: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-column-gap: 10px;
            column-gap: 10px;
    row-gap: 10px;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    margin-bottom: 0 !important;
  }
  .uss_shop_detail_350_right .uss_img_wrapper .uss_img_ico_box.column > .uss_img_ico {
    margin-right: 0 !important;
  }
}
.imageArea,
.imageWrapOuter,
.uss_img_holder_outer {
  max-width: 100%;
}
.imageArea div,
.imageWrapOuter div,
.uss_img_holder_outer div,
.imageArea a,
.imageWrapOuter a,
.uss_img_holder_outer a,
.imageArea img,
.imageWrapOuter img,
.uss_img_holder_outer img {
  max-width: 100%;
}
.uss_eshop_block_item {
  max-width: 100%;
}
.uss_eshop_block_item div,
.uss_eshop_block_item a,
.uss_eshop_block_item img {
  max-width: 100%;
}
.uss_tabs table[class*='uss_table'] {
  border-collapse: collapse;
}
@media (max-width: 650px) {
  .imageArea,
  .imageWrapOuter,
  .uss_img_holder_outer {
    height: auto !important;
  }
  .imageArea div,
  .imageWrapOuter div,
  .uss_img_holder_outer div {
    height: auto !important;
  }
  .uss_eshop_block_item {
    height: auto !important;
  }
  .uss_eshop_block_item div {
    height: auto !important;
  }
  .content .uss_section_content img {
    float: none !important;
  }
}
.slick-slider {
  position: relative;
  display: block;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -ms-touch-action: pan-y;
      touch-action: pan-y;
}
.slick-list {
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
}
.slick-list.dragging {
  cursor: pointer;
  cursor: hand;
}
.slick-slider .slick-track,
.slick-slider .slick-list {
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}
.slick-track {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
  min-width: 100%;
}
.slick-loading .slick-track {
  visibility: hidden;
}
.slick-slide {
  display: none;
  float: left;
  height: 100%;
  min-height: 1px;
}
[dir='rtl'] .slick-slide {
  float: right;
}
.slick-slide img {
  display: block;
}
.slick-slide.slick-loading img {
  display: none;
}
.slick-slide.dragging img {
  pointer-events: none;
}
.slick-initialized .slick-slide {
  display: block;
}
.slick-loading .slick-slide {
  visibility: hidden;
}
.slick-vertical .slick-slide {
  display: block;
  height: auto;
  border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
  display: none;
}
.slick-prev,
.slick-next {
  font-size: 0;
  line-height: 0;
  position: absolute;
  top: 50%;
  display: block;
  width: 20px;
  height: 20px;
  padding: 0;
  -webkit-transform: translate(0, -50%);
          transform: translate(0, -50%);
  cursor: pointer;
  color: transparent;
  border: none;
  outline: none;
  background: transparent;
}
.slick-prev {
  left: -25px;
}
[dir='rtl'] .slick-prev {
  right: -25px;
  left: auto;
}
.slick-next {
  right: -25px;
}
[dir='rtl'] .slick-next {
  right: auto;
  left: -25px;
}
.slick-dots {
  position: absolute;
  bottom: -25px;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
}
.slick-dots li {
  position: relative;
  display: inline-block;
  margin: 0 5px;
  padding: 0;
  cursor: pointer;
}
.slick-dots li button {
  font-size: 0;
  line-height: 0;
  display: block;
  width: 20px;
  height: 20px;
  padding: 5px;
  cursor: pointer;
  color: transparent;
  border: 0;
  outline: none;
  background: transparent;
}
.slider .slide {
  max-height: 100%;
  overflow: hidden;
}
.slider .image:not(.aspect_rated) {
  max-height: 100%;
}
.slider .image:not(.aspect_rated) img {
  max-width: 100%;
  max-height: 100%;
}
.slider .image {
  position: relative;
}
.slider .image img {
  display: block;
  margin: 0 auto;
}
.slider .image.width_fit.height_more img {
  width: auto;
  height: 100%;
}
.slider .image.width_fit.height_fit img {
  display: block;
  max-width: 100%;
  margin: 0 auto;
}
.slider .image.aspect_rated img {
  display: block;
  position: absolute;
  bottom: 50%;
  right: 50%;
  -webkit-transform: translate(50%, 50%);
          transform: translate(50%, 50%);
}
.slider .image.height_less img {
  height: 100%;
  width: auto;
}
.slider .image.width_less img {
  width: 100%;
  height: auto;
}
.slider .image.width_more.height_fit img {
  height: 100% !important;
  width: auto !important;
}
.slider .image.width_more.height_more img {
  height: 100%;
  width: auto;
}
.slider .image.width_less.height_more img {
  width: auto;
  height: 100%;
}
.slider .image.width_fit.height_less img {
  width: auto;
  height: 100%;
}
.slider .image.width_less.height_less img {
  height: 100%;
  width: auto;
  max-width: none;
}
@font-face {
  font-family: 'Vremena Grotesk';
  src: url('../fonts/VremenaGroteskBook.eot');
  src: url('../fonts/VremenaGroteskBook.eot?#iefix') format('embedded-opentype'), url('../fonts/VremenaGroteskBook.woff2') format('woff2'), url('../fonts/VremenaGroteskBook.woff') format('woff'), url('../fonts/VremenaGroteskBook.ttf') format('truetype'), url('../fonts/VremenaGroteskBook.svg#VremenaGroteskBook') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Vremena Grotesk';
  src: url('../fonts/VremenaGrotesk.eot');
  src: url('../fonts/VremenaGrotesk.eot?#iefix') format('embedded-opentype'), url('../fonts/VremenaGrotesk.woff2') format('woff2'), url('../fonts/VremenaGrotesk.woff') format('woff'), url('../fonts/VremenaGrotesk.ttf') format('truetype'), url('../fonts/VremenaGrotesk.svg#VremenaGrotesk') format('svg');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Vremena Grotesk';
  src: url('../fonts/VremenaGroteskMedium.eot');
  src: url('../fonts/VremenaGroteskMedium.eot?#iefix') format('embedded-opentype'), url('../fonts/VremenaGroteskMedium.woff2') format('woff2'), url('../fonts/VremenaGroteskMedium.woff') format('woff'), url('../fonts/VremenaGroteskMedium.ttf') format('truetype'), url('../fonts/VremenaGroteskMedium.svg#VremenaGroteskMedium') format('svg');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'SegoeUI';
  font-weight: normal;
  font-style: normal;
  src: url('../fonts/SegoeUIRegular/SegoeUIRegular.eot');
  src: url('../fonts/SegoeUIRegular/SegoeUIRegular.eot?#iefix') format('embedded-opentype'), url('../fonts/SegoeUIRegular/SegoeUIRegular.woff') format('woff'), url('../fonts/SegoeUIRegular/SegoeUIRegular.ttf') format('truetype');
}
@font-face {
  font-family: 'SegoeUI';
  font-weight: bold;
  font-style: normal;
  src: url('../fonts/SegoeUISemiBold/SegoeUISemiBold.eot');
  src: url('../fonts/SegoeUISemiBold/SegoeUISemiBold.eot?#iefix') format('embedded-opentype'), url('../fonts/SegoeUISemiBold/SegoeUISemiBold.woff') format('woff'), url('../fonts/SegoeUISemiBold/SegoeUISemiBold.ttf') format('truetype');
}
@font-face {
  font-family: 'SegoeUI';
  font-weight: 900;
  font-style: normal;
  src: url('../fonts/SegoeUIBold/SegoeUIBold.eot');
  src: url('../fonts/SegoeUIBold/SegoeUIBold.eot?#iefix') format('embedded-opentype'), url('../fonts/SegoeUIBold/SegoeUIBold.woff') format('woff'), url('../fonts/SegoeUIBold/SegoeUIBold.ttf') format('truetype');
}
@-webkit-keyframes top_menu_apperance {
  from {
    right: -250px;
  }
  to {
    right: 0;
  }
}
@keyframes top_menu_apperance {
  from {
    right: -250px;
  }
  to {
    right: 0;
  }
}
input[type='text'].styler {
  border: 1px solid #e5e5e5;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}
input[type='email'].styler {
  border: 1px solid #e5e5e5;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}
input[type='number'].styler {
  border: 1px solid #e5e5e5;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}
input[type='password'].styler {
  border: 1px solid #e5e5e5;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}
input[type='search'].styler {
  border: 1px solid #e5e5e5;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}
input[type='tel'].styler {
  border: 1px solid #e5e5e5;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}
input[type='url'].styler {
  border: 1px solid #e5e5e5;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}
textarea.styler {
  border: 1px solid #e5e5e5;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}
button.styler {
  font-family: 'Vremena Grotesk';
  font-size: 15px;
  line-height: 1;
  display: inline-block;
  margin: 0 !important;
  margin-top: 20px;
  padding: 10px 12px 9px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #222222;
  border: 2px solid #a1536d;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  text-shadow: none;
}
input[type='submit'].styler {
  font-family: 'Vremena Grotesk';
  font-size: 15px;
  line-height: 1;
  display: inline-block;
  margin: 0 !important;
  margin-top: 20px;
  padding: 10px 12px 9px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #a1536d;
  border: 2px solid #a1536d;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  text-shadow: none;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
input[type='reset'].styler {
  font-family: 'Vremena Grotesk';
  font-size: 15px;
  line-height: 1;
  display: inline-block;
  margin: 0 !important;
  margin-top: 20px;
  padding: 10px 12px 9px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #222222;
  border: 2px solid #a1536d;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  text-shadow: none;
}
input[type='button'].styler {
  font-family: 'Vremena Grotesk';
  font-size: 15px;
  line-height: 1;
  display: inline-block;
  margin: 0 !important;
  margin-top: 20px;
  padding: 10px 12px 9px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #222222;
  border: 2px solid #a1536d;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  text-shadow: none;
}
input[type='submit'] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
label.sector_title {
  font-size: 15px !important;
  font-family: inherit !important;
}
.inner {
  padding-left: 20px !important;
  padding-right: 20px !important;
  max-width: 1500px;
  margin: 0 auto;
}
.uss_shop_blocks_view {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}
.uss_shop_blocks_view .uss_eshop_item {
  overflow: hidden;
  margin: 0 0 20px 0;
  padding: 0 0 0 0;
  border: 1px solid #e5e5e5;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  max-width: calc((100% - 10px) / 2);
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  row-gap: 10px;
}
.uss_shop_blocks_view .uss_eshop_item > div {
  max-width: 100%;
  width: 100%;
  margin-bottom: 0 !important;
  margin-top: 0 !important;
}
.uss_shop_blocks_view .uss_eshop_item > div:not(.price_btn):not(.buttons):not(.price_btn-extra):not(.posimg_item) {
  padding-left: 10px;
  padding-right: 10px;
}
.uss_shop_blocks_view .uss_eshop_item .uss_compare_by {
  padding: 10px 0;
  text-align: center;
  font-size: 15px;
}
.uss_shop_blocks_view .uss_eshop_item .uss_compare_by a {
  text-decoration: none;
  display: inline-block;
  min-height: 20px;
  background: url('../img/compare.png') 5px center no-repeat no-repeat;
  padding-left: 30px;
}
.uss_shop_blocks_view .uss_eshop_item .uss_compare_by a:hover {
  text-decoration: underline;
}
.uss_shop_blocks_view .uss_eshop_item .uss_shop_put_wrap {
  padding: 10px 0;
  font-size: 15px;
  text-align: left;
}
.uss_shop_blocks_view .uss_eshop_item .uss_shop_put_wrap a {
  text-decoration: none;
  display: inline-block;
  min-height: 20px;
  background: url('../img/fav.png') 5px center no-repeat no-repeat;
  padding-left: 30px;
}
.uss_shop_blocks_view .uss_eshop_item .uss_shop_put_wrap a:hover {
  text-decoration: underline;
}
.uss_shop_blocks_view .uss_eshop_item .eshop_filters_area {
  width: 100%;
  margin-bottom: 13px;
  margin-top: 0;
}
.uss_shop_blocks_view .uss_eshop_item .eshop_filters_area .title {
  margin-bottom: 3px;
  margin-right: 5px;
  font-weight: 500;
}
.uss_shop_blocks_view .uss_eshop_item .eshop_filters_area .eshop_filters_line {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  row-gap: 2px;
}
.uss_shop_blocks_view .uss_eshop_item .eshop_filters_area .value .jq-selectbox {
  width: 100%;
}
.uss_shop_blocks_view .uss_eshop_item .eshop_filters_area .value .jq-selectbox .jq-selectbox__select {
  width: 100%;
}
.uss_shop_blocks_view .uss_eshop_item .eshop_filters_area form .group {
  font-family: 'SegoeUI';
  margin-bottom: 10px;
}
.uss_shop_blocks_view .uss_eshop_item .eshop_filters_area form .group .eshop_filters_group_title {
  font-size: 16px;
  font-weight: bold;
}
.uss_shop_blocks_view .uss_eshop_item .eshop_filters_area form .group .eshop_filters_items .eshop_filters_item .title {
  font-size: 15px;
  margin-right: 5px;
  font-weight: 500;
}
.uss_shop_blocks_view .uss_eshop_item .eshop_filters_area form .group .eshop_filters_items .eshop_filters_item .value {
  font-size: 15px;
  font-weight: 400;
}
.uss_shop_blocks_view .uss_eshop_item .eshop_filters_area .eshop_filters_line,
.uss_shop_blocks_view .uss_eshop_item .eshop_filters_area .value {
  max-width: 100%;
}
.uss_shop_blocks_view .uss_eshop_item:hover {
  border-color: #a1536d;
}
.uss_shop_blocks_view .uss_eshop_item:not( :nth-of-type(4n)) {
  margin-right: 2px;
}
.uss_shop_blocks_view .uss_eshop_item .price_btn {
  padding-left: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
  margin-top: auto !important;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  row-gap: 13px;
}
.uss_shop_blocks_view .uss_eshop_item .buttons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
}
.uss_shop_blocks_view .uss_eshop_item .posimg_item {
  margin: 0 0 18px 0;
}
.uss_shop_blocks_view .uss_eshop_item .posimg_item .uss_img_holder {
  padding: 0;
  border: none;
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
.uss_shop_blocks_view .uss_eshop_item .posimg_item .uss_img_holder a img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}
.uss_shop_blocks_view .uss_eshop_item .uss_shop_name {
  margin-bottom: 4px;
}
.uss_shop_blocks_view .uss_eshop_item .uss_shop_name a {
  font-family: 'Vremena Grotesk';
  font-size: 15px;
  display: block;
  overflow: hidden;
  height: 3.51em;
  text-decoration: none;
  text-transform: uppercase;
  color: #1e222f;
  line-height: 1.2;
}
.uss_shop_blocks_view .uss_eshop_item .uss_shop_name a:hover {
  color: #a1536d;
}
.uss_shop_blocks_view .uss_eshop_item .uss_shop_description {
  margin-top: 10px;
}
.uss_shop_blocks_view .uss_eshop_item .uss_shop_price {
  margin: 0;
  padding: 0;
  vertical-align: bottom;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  line-height: 1.2;
}
.uss_shop_blocks_view .uss_eshop_item .uss_shop_price span {
  padding: 0 !important;
  background: none !important;
}
.uss_shop_blocks_view .uss_eshop_item .uss_shop_price span.old_price {
  font-family: 'SegoeUI';
  font-size: 15px;
  display: block;
  color: #adb1b6;
}
.uss_shop_blocks_view .uss_eshop_item .uss_shop_price span.actual_price {
  font-family: 'SegoeUI';
  font-weight: bold;
  font-size: 24px;
  color: #a05e79;
}
.uss_shop_blocks_view .uss_eshop_item .uss_shop_by {
  display: block;
  margin: 0;
}
.uss_shop_blocks_view .uss_eshop_item .uss_shop_by a.add_to_cart {
  font-size: 16px;
  position: relative;
  display: block;
  margin-bottom: -2px;
  background: url(../img/cart_icon.png) 10px center no-repeat, #8f546c;
  padding: 11px 10px 10px 35px;
  color: #fff;
}
.uss_shop_blocks_view .uss_eshop_item .uss_shop_by a.add_to_cart:hover {
  opacity: 0.8;
  background-color: #222222 !important;
}
.uss_shop_blocks_view .uss_eshop_item .uss_shop_by a.add_to_cart.already_in_cart {
  background-image: none;
  padding-left: 10px;
  width: 100%;
  margin: 0 auto;
  display: block;
  background-color: #222222 !important;
  text-decoration: none;
  text-align: center;
}
.uss_shop_blocks_view .uss_eshop_item .uss_shop_by:not(.uss_shop_buy_one_click) {
  position: relative;
}
.uss_shop_blocks_view .uss_eshop_item .uss_shop_by.uss_shop_buy_one_click {
  display: block;
  width: 100%;
}
.uss_shop_blocks_view .uss_eshop_item .uss_shop_by.uss_shop_buy_one_click a {
  font-family: 'SegoeUI';
  font-size: 16px;
  font-weight: bold;
  position: static;
  display: inline-block;
  width: 100%;
  margin-left: 0;
  padding: 13px 0 11px 30px;
  text-align: center;
  text-indent: 0;
  color: #ffffff;
  background-position: 27px center;
}
.uss_shop_blocks_view .uss_eshop_item .uss_shop_producer {
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.uss_shop_blocks_view .uss_eshop_item .uss_shop_uid {
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.uss_shop_blocks_view .uss_eshop_item.order_many .uss_shop_by:not(.uss_shop_buy_one_click) .amount_title {
  font-family: 'SegoeUI';
  font-size: 15px;
  position: absolute;
  right: 159px;
  bottom: 55px;
  display: inline-block;
  white-space: nowrap;
  color: #222222;
  display: none !important;
}
.uss_shop_blocks_view .uss_eshop_item.order_many .uss_shop_by:not(.uss_shop_buy_one_click) .basket_amount_class {
  font-family: 'SegoeUI';
  font-size: 15px;
  position: absolute;
  right: 90px;
  bottom: 47px;
  width: 32px;
  height: 32px;
  text-align: center;
  border: 2px solid #e5e5e5;
  background: #fff;
  display: none !important;
}
.uss_shop_blocks_view .uss_eshop_item.order_many .uss_shop_by:not(.uss_shop_buy_one_click):not(.uss_shop_blocks_view) .uss_eshop_item.order_many .uss_shop_by .uss_shop_by {
  margin-top: 50px;
}
.uss_eshop_menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}
.uss_eshop_sameproducts {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}
.catalog_menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}
.uss_catalog_block_cat {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}
.uss_shop_block_cat {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}
.spec .items {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}
.flex .items {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}
.flex .uss_images_block {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}
.flex .catalog_menu > li > div > span {
  display: block;
}
.flex .catalog_menu > li img {
  max-width: 100%;
  height: auto;
}
html {
  height: 100%;
  min-height: auto;
  margin: 0;
  padding: 0;
}
body {
  min-height: auto;
  height: 100%;
  font-family: 'SegoeUI';
  min-width: 420px;
  margin: 0;
  padding: 0;
  line-height: 1.3;
  font-size: 15px;
  color: #161c2c;
}
#wrap {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  min-height: 100%;
  position: relative;
  overflow: hidden;
  min-width: 420px;
  margin: 0;
  padding: 0;
  color: #161c2c;
}
#wrap .uss-flex-items {
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -webkit-box-pack: start !important;
      -ms-flex-pack: start !important;
          justify-content: flex-start !important;
  -ms-flex-wrap: wrap !important;
      flex-wrap: wrap !important;
  row-gap: 20px;
}
.catalog_orderbutton {
  font-family: 'SegoeUI';
  font-weight: normal;
  font-size: 17px;
  line-height: 32px;
  display: inline-block;
  height: auto;
  margin-bottom: 0;
  padding: 0 20px;
  text-align: center;
  opacity: 1;
  border-radius: 0;
  background: #a1536d;
  -webkit-box-shadow: none;
          box-shadow: none;
  text-shadow: none;
  margin: 10px 0 0 0;
}
.catalog_orderbutton:hover {
  background-color: #222222;
}
.aside {
  width: 260px;
}
.aside .uss_eshop_filters_block {
  padding: 0;
  border: none;
}
.aside .uss_eshop_filters_block form .filter_item.filter_price {
  max-width: 100%;
  margin-top: 0;
  margin-bottom: 5px;
}
.aside .uss_eshop_filters_block form .filter_item.filter_producer {
  max-width: 100%;
  margin-top: 0;
  margin-bottom: 5px;
}
.aside .uss_eshop_filters_block form .filter_submit {
  max-width: 100%;
  margin-top: 0;
  margin-bottom: 5px;
}
.aside .uss_eshop_filters_block form .filter_item {
  margin: 0 0 5px 0;
}
.aside .uss_eshop_filters_block form .filter_item:last-child {
  margin-bottom: 0;
}
.aside .uss_eshop_filters_block .jq-selectbox {
  width: 100%;
}
.aside .uss_eshop_filters_block .jq-selectbox .jq-selectbox__select {
  width: 100%;
  min-width: auto;
  border: 1px solid #d0d5d9;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  text-shadow: none;
}
.aside .uss_eshop_filters_block .jq-selectbox .jq-selectbox__select .jq-selectbox__select-text {
  width: 100%;
}
.aside .uss_eshop_filters_block .jq-selectbox .jq-selectbox__select .jq-selectbox__trigger {
  border: none;
  background: url(../img/filter-arr.png) center no-repeat;
}
.aside .uss_eshop_filters_block .jq-selectbox .jq-selectbox__select .jq-selectbox__trigger .jq-selectbox__trigger-arrow {
  border: none;
}
.aside .uss_eshop_filters_block .jSliderWrap {
  min-height: 55px;
  display: block;
  width: 100%;
}
.aside .uss_eshop_filters_block .jslider {
  display: block;
  width: 94%;
  margin: 25px auto 0 auto;
}
.aside .uss_eshop_filters_block .filter_price input {
  width: 46px;
}
.aside .uss_eshop_filters_block .filter_price:last-child {
  margin-right: 0;
}
.aside .uss_eshop_filters_block .filter_submit {
  margin: 0;
}
.aside .group {
  margin-bottom: 5px;
}
.aside ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.aside ul li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.aside .aside_button {
  display: none;
  cursor: pointer;
}
.aside img {
  max-width: 100%;
  height: auto;
}
.aside iframe {
  max-width: 100%;
}
.aside object {
  max-width: 100%;
}
.aside video {
  max-width: 100%;
}
.aside ymaps {
  max-width: 100%;
}
.aside .h3 {
  font-size: 18px;
  margin: 0 0 20px 0;
}
.aside .block {
  margin-bottom: 62px;
}
.aside .block .h3 {
  font-size: 18px;
}
.aside .block form {
  width: 100%;
}
.aside .block form .group {
  width: 100%;
}
.aside .block form .group .fc_item {
  width: 100%;
}
.aside .block form .group .fc_item .elem_item {
  width: 100%;
}
.aside .block form .group .fc_item .elem_item input.styler {
  width: 100%;
  height: 32px;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}
.aside .block form .group .fc_item .elem_item input {
  width: 100%;
  height: 32px;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}
.aside .block form .group .fc_item .elem_item textarea {
  width: 100%;
  height: 32px;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}
.aside .block form .group .fc_item .elem_item textarea.styler {
  width: 100%;
  height: 32px;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}
.aside .block form .buttons input {
  font-family: 'Vremena Grotesk';
  font-size: 15px;
  line-height: 1;
  display: inline-block;
  width: 100%;
  margin: 0 !important;
  margin-top: 20px;
  padding: 10px 12px 9px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #222222;
  border: 2px solid #a1536d;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  text-shadow: none;
}
.aside .block form .buttons input:hover {
  background: #a1536d;
  color: #ffffff;
}
.aside .block ul li a {
  font-family: 'Vremena Grotesk';
  font-size: 15px;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  color: #1e222f;
}
.aside .block ul li a:hover {
  color: #8f546c;
}
.aside .block ul li a.active {
  color: #8f546c;
}
.aside .block > ul {
  display: block !important;
  border-top: 2px solid #d2d5d8;
}
.aside .block > ul > li > a {
  display: block;
  padding: 17px 0 14px 0;
  border-bottom: 2px solid #d2d5d8;
}
.aside .block > ul > li > div {
  display: block;
  padding: 17px 0 14px 0;
  border-bottom: 2px solid #d2d5d8;
}
.aside .block > ul > li.last > a {
  border: none;
}
.aside .block > ul > li.last > div {
  border: none;
}
.aside .block ul.submenu {
  padding: 18px 0 17px 0;
  border-bottom: 2px solid #d2d5d8;
}
.aside .block ul.submenu li a {
  font-weight: normal;
  text-transform: none;
  border: none;
}
.aside .block ul.submenu > li > a {
  padding: 0 0 5px 0;
}
.aside .block ul.submenu > li > ul.submenu {
  padding: 3px 0 15px 0;
  border: none;
}
.aside .block ul.submenu > li > ul.submenu > li > a {
  padding: 0 0 2px 15px;
  background-image: url('../img/menu_arr.png');
  background-repeat: no-repeat;
  background-position: left center;
}
.aside .block ul.catalog_menu > li {
  margin-bottom: 0 !important;
}

.aside .block .news_block_item {
	margin-bottom: 40px;
}
.aside .block .news_block_item .image {
  display: block;
  float: none;
  margin: 0 0 6px 0;
  padding: 0 0 0 0;
}
.aside .block .news_block_item .info .date {
  margin: 0 0 3px 0;
  color: #adb1b6;
  overflow: hidden;
}
.aside .block .news_block_item .info .title {
  color: #8f546c;
  margin-bottom: 12px;
  overflow: hidden;
  display: inline;
}
.aside .block .news_block_item .info .title a {
  display: inline;
  color: inherit;
  margin-right: 5px;
}
.aside .block .news_block_item .info .title .commentsAmount {
  font-size: 14px;
  text-decoration: none;
}
.aside .block .news_block_item .info .title .commentsAmount img {
  display: inline;
  margin-bottom: 3px;
  vertical-align: bottom;
}
.aside .block .news_block_item .info .preview {
  display: block;
  width: 100%;
  clear: both;
}
.aside .block .btn {
  width: 100%;
  text-align: center;
}
.aside .block.type0 .wrap {
  border: none;
}
.aside .block.type0 .h3 {
  margin: 0 0 14px 0;
}
.aside .block.type1 .wrap {
  padding: 22px 24px 5px 27px;
  border: 2px solid #e5e5e5;
}
.aside .block.type3 .wrap {
  padding: 15px;
  border: 2px solid #a1536d;
}
.aside .block.type3 > .fc_form_tml {
  padding: 15px;
  border: 2px solid #a1536d;
}
.aside .block.type4 {
  padding: 15px;
  border: 2px solid #a1536d;
}
.aside .block.type4 > .fc_form_tml {
  margin: 0;
}
.aside .block.aside_contacts {
  font-size: 17px;
}
.aside .block.aside_contacts p {
  margin: 0;
}
.aside .block.polling .submit #submitvote {
  display: inline-block;
  min-width: 119px;
  height: 32px;
  margin-top: 10px;
  padding: 0 10px;
  text-align: center;
  text-transform: uppercase;
  border: 2px solid #AA506D;
  background: none;
}
.aside .block.polling .submit #submitvote:hover {
  background: #AA506D;
}
.aside.opened .main_aside_block {
  display: block !important;
}
.aside.aside_left {
  float: left;
  margin: 0 28px 0 0;
}
.aside.aside_left .block .fc_captcha .captcha_item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.aside.aside_left .block .fc_captcha .captcha_item img {
  float: none;
  display: block;
}
.aside.aside_left .block .fc_captcha .captcha_item input.styler {
  width: calc(100% - 97px - 15px);
  height: 38px !important;
}
.aside.aside_right {
  float: right;
  margin: 0 0 0 28px;
}
.aside .uss_eshop_block_item .uss_shop_name {
  font-size: 15px !important;
}
.aside .uss_eshop_block_item .uss_shop_name a {
  display: block;
  line-height: 1.2em;
  max-height: 2.4em;
  overflow: hidden;
}
.aside .uss_eshop_block_item .price_buy {
  margin-top: 15px;
}
.aside .polling h5 {
  font-size: 15px;
  margin-bottom: 15px;
}
.aside .polling .uss_votes form .message {
  display: block;
  margin-top: 15px;
  margin-bottom: 15px;
}
.aside .polling .uss_more {
  margin-top: 15px;
  margin-bottom: 0;
}
.aside .aside-banner {
  padding: 0;
  position: relative;
}
.aside .aside-banner p {
  margin: 0;
}
.aside .aside-banner img {
  display: block;
  max-width: 100%;
  height: auto !important;
}
.aside .aside-banner .image {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 0;
}
.aside .aside-banner .title {
  font-size: 35px;
  line-height: 1;
  color: #fff;
  max-width: 100%;
  overflow-wrap:break-word; white-space:pre-wrap; white-space:-moz-pre-wrap; white-space:-pre-wrap; white-space:-o-pre-wrap; word-wrap:break-word;
}
.aside .aside-banner .info {
  position: relative;
  z-index: 1;
  padding: 15px 18px;
  background: rgba(0, 0, 0, .6);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  text-align: center;
  overflow: hidden;

}
.container {
  -webkit-box-flex: 1;
      -ms-flex: 1 auto;
          flex: 1 auto;
}
.container .inner > .slider_wrap {
  margin-bottom: 42px;
}
.inner {
  padding: 50px 0 0 0;
}
.block {
  margin-bottom: 40px;
  position: relative;
}
.block .h3 {
  text-transform: uppercase;
}
.block .h3 .all {
  font-size: 15px;
  line-height: 46px;
  float: right;
}
.block > .all {
  position: absolute;
  height: 39px;
  right: 0;
  top: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.aside .block > .all {
  height: 23px;
}
.content {
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  row-gap: 62px;
}
.content > div {
  width: 100%;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
.content .fc_form_tml {
  margin-bottom: 8px;
}
.mainpage .content-wrap {
  margin-bottom: -20px !important;
}
.mainpage .uss_section_content p {
  margin: 0;
}
.mainpage .uss_section_content p + p {
  margin-top: 15px;
}
.cleaner {
  display: none !important;
}
.contacts_block {
  position: relative;
}
.contacts_block .map-wrap {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.contacts_block .left {
  float: left;
  overflow: hidden;
  -webkit-box-flex: 1;
      -ms-flex: 1 auto;
          flex: 1 auto;
}
.contacts_block .left p {
  margin: 0;
}
.contacts_block .left iframe {
  max-width: 100% !important;
}
.contacts_block .left > ymaps {
  max-width: 100% !important;
  height: auto;
}
.contacts_block .right {
  float: right;
  width: 200px;
  padding: 0 0 0 20px;
}
.contacts_block .center {
  overflow: hidden;
}
.contacts_block .h3 {
  font-size: 30px;
  margin: 0 0 26px 0;
  margin-bottom: 5px;
  text-transform: uppercase;
}
.contacts_block .map > ymaps {
  min-height: 450px;
}
.contacts_block .contacts {
  position: absolute;
  right: 50px;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  z-index: 1;
  background: rgba(255, 255, 255, 0.95);
  padding: 60px;
}
.contacts_block .contacts .h3 {
  margin-bottom: 10px;
}
.contacts_block .contacts p {
  margin: 0;
}
.contacts_block .contacts p + p {
  margin-top: 10px;
}
.form_inline {
  margin-top: 10px;
  margin-bottom: 10px;
}
.form_inline .h3 {
  font-size: 30px;
  text-transform: uppercase;
}
.form_inline .fc_form_tml {
  margin-bottom: 0;
}
.form_inline form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 30px 30px 36px 30px;
  border: 2px solid #e5e5e5;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}
.form_inline form .uss_error_form {
  width: 100%;
}
.form_inline form label {
  font-size: 15px;
  margin: 0 0 8px 0;
}
.form_inline form .group {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
  margin-bottom: 20px;
}
.form_inline form .group .fc_item {
  margin-bottom: 0;
  -webkit-box-flex: 1;
      -ms-flex: 1 auto;
          flex: 1 auto;
}
.form_inline form .group .fc_item .elem_item {
  width: 100%;
}
.form_inline form .group .fc_item .elem_item input.styler {
  width: 100%;
  height: 32px;
  border: 2px solid #e5e5e5;
  border-radius: 0;
  -webkit-box-shadow: none;
          box-shadow: none;
  text-shadow: none;
}
.form_inline form .group .fc_item .elem_item textarea.styler {
  width: 100%;
  height: 5.6em;
  border: 2px solid #e5e5e5;
  border-radius: 0;
  -webkit-box-shadow: none;
          box-shadow: none;
  text-shadow: none;
}
.form_inline form .group .fc_item .elem_item input {
  width: 100%;
  height: 32px;
  border: 2px solid #e5e5e5;
  border-radius: 0;
  -webkit-box-shadow: none;
          box-shadow: none;
  text-shadow: none;
}
.form_inline form .group .fc_item .elem_item textarea {
  width: 100%;
  height: 32px;
  border: 2px solid #e5e5e5;
  border-radius: 0;
  -webkit-box-shadow: none;
          box-shadow: none;
  text-shadow: none;
}
.form_inline form .group:not(.end) .fc_item:not(.fc_textarea) {
  max-width: calc((100% - 10px) / 2);
}
.form_inline form .group:last-child {
  margin-right: 0;
}
.form_inline form .group.end {
  max-width: calc(100% - 206px);
}
.form_inline form .buttons {
  max-width: 206px;
  text-align: right;
  -webkit-box-flex: 1;
      -ms-flex: 1 auto;
          flex: 1 auto;
}
.form_inline form .buttons input.styler {
  font-family: 'Vremena Grotesk';
  font-size: 15px;
  display: inline-block;
  min-width: 177px;
  height: 32px;
  margin: 0;
  margin-top: 20px;
  padding: 10px 12px 9px;
  padding: 0 20px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #222222;
  border: 2px solid #a1536d;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  text-shadow: none;
}
.form_inline form .buttons input.styler:hover {
  background: #a1536d;
}
.form_inline form .buttons input {
  font-family: 'Vremena Grotesk';
  font-size: 15px;
  display: inline-block;
  min-width: 177px;
  height: 32px;
  margin: 0;
  margin-top: 20px;
  padding: 10px 12px 9px;
  padding: 0 20px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #222222;
  border: 2px solid #a1536d;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  text-shadow: none;
}
.form_inline form .buttons input:hover {
  background: #a1536d;
}
.faq .uss_faq {
  background: none;
}
.faq .uss_faq .uss_faq_item {
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}
.faq .uss_faq .uss_faq_item .uss_faq_question .uss_faq_question_info {
  font-family: 'Vremena Grotesk';
  text-transform: uppercase;
}
.faq .uss_faq .uss_faq_item .uss_faq_reply .uss_faq_reply_title {
  font-family: 'Vremena Grotesk';
  text-transform: uppercase;
}
.faq .inner {
  position: relative;
}
.faq .all {
  position: relative;
  z-index: 1;
}
.uss_faq_item.container .faq .uss_faq .uss_faq_item {
  padding-top: 44px;
  border-top: 2px solid #e5e5e5;
}
* {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  outline: none;
}
h1 {
  font-family: 'Vremena Grotesk';
  font-size: 30px;
  font-weight: normal;
  margin-top: 0;
  text-transform: uppercase;
  color: #372124;
}
.h1 {
  font-family: 'Vremena Grotesk';
}
.h2 {
  font-family: 'Vremena Grotesk';
}
.h3 {
  font-family: 'Vremena Grotesk';
}
.h4 {
  font-family: 'Vremena Grotesk';
}
.h5 {
  font-family: 'Vremena Grotesk';
}
.btn {
  font-family: 'Vremena Grotesk';
  font-size: 15px;
  display: inline-block;
  margin-top: 20px;
  padding: 10px 12px 9px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #222222 !important;
  border: 2px solid #a1536d;
}
.btn:hover {
  background: #a1536d;
  color: #fff !important;
}
.cart_opener {
  display: none;
  float: right;
  margin-left: 15px;
}
.search_opener {
  display: none;
  float: right;
  margin-left: 15px;
}
.menu_burger {
  display: none;
  float: right;
  margin-left: 35px;
  display: block;
  width: 20px;
  height: 17px;
}
.menu_burger span {
  display: block;
  width: 100%;
  height: 3px;
  margin-bottom: 4px;
  background: #222;
}
.menu_burger:last-child {
  margin-bottom: 0;
}
a {
  color: #a1536d;
}
a:hover {
  text-decoration: none;
  color: #a1536d;
}
.h_nav_top {
  font-size: 15px;
  color: #1e222f;
  background: #f4f5f6;
  font-family: "Vremena Grotesk";
}
.h_nav_top input {
  font-family: inherit;
}
.h_nav_top .inner {
  padding: 21px 0 21px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.h_nav_top .left {
  float: left;
}
.h_nav_top .left .contacts {
  margin-right: 25px;
}
.h_nav_top .right {
  float: right;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.h_nav_top .center {
  overflow: hidden;
  text-align: center;
  -webkit-box-flex: 1;
      -ms-flex: 1 auto;
          flex: 1 auto;
}
.h_nav_top p {
  margin: 0;
}
.h_nav_top .menu_burger {
  display: none;
}
.h_nav_top .contacts {
  display: inline-block;
  vertical-align: middle;
}
.h_nav_top .contacts a {
  font-family: inherit;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  color: #1e222f;
}
.h_nav_top .contacts_right {
  display: inline-block;
  vertical-align: middle;
}
.h_nav_top .call_me {
  display: inline-block;
  vertical-align: middle;
}
.h_nav_top .call_me a {
  font-family: inherit;
  font-size: 15px;
  text-decoration: none;
  color: #1e222f;
}
.h_nav_top .call_me a:hover {
  text-decoration: underline;
}
.h_nav_top .cart {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 28px;
  margin-left: 20px;
  text-transform: uppercase;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
          flex-direction: row-reverse;
}
.h_nav_top .cart .cart-link {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.h_nav_top .cart p {
  font-size: 15px;
  display: inline-block;
  vertical-align: middle;
}
.h_nav_top .cart .amounts {
  display: none;
}
.h_nav_top .cart .cart_title {
  padding: 0 16px 0 0;
}
.h_nav_top .cart .cart_title a {
  font-size: 15px;
  text-decoration: none;
  text-transform: uppercase;
  color: #1e222f;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.h_nav_top .cart .cart_title a .cart-text {
  margin-left: 7px;
}
.h_nav_top .cart #uss_block_basket_totals {
  color: #b0b6bc;
}
.h_nav_top .cart .uss_widget.empty + .cart_title .cart-text {
  display: none;
}
.h_nav_top .cart #uss_block_basket_totals {
  display: block;
  background: #8F546C;
  color: #fff;
  padding: 3px 10px 2px 10px;
}
.h_nav_top .cart.adaptive {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: block !important;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 36px;
  margin: 0;
  padding-top: 5px;
  padding-right: 10px;
  padding-left: 10px;
  background: #f4f5f6;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
.h_nav_top .cart.adaptive > div {
  display: inline-block;
  -webkit-box-flex: 1;
      -ms-flex: 1 auto;
          flex: 1 auto;
}
.h_nav_top .search {
  position: relative;
  height: 28px;
}
.h_nav_top .search .uss_site_search {
  height: 100%;
}
.h_nav_top .search input[type='text'] {
  font-size: 15px;
  display: inline-block;
  width: 100px;
  height: 28px;
  margin-top: 0;
  margin-left: 30px;
  padding: 0 0 0 9px;
  -webkit-transition: background 0.3s linear, width 0.3s linear;
  transition: background 0.3s linear, width 0.3s linear;
  text-transform: uppercase;
  color: #b0b6bc;
  border: none;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}
.h_nav_top .search input[type='text'].focus {
  width: 300px;
  background: #fff;
}
.h_nav_top .search input[type='text'].hover {
  background: #fff;
}
.h_nav_top .search input[type='submit'] {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 29px;
  height: 28px;
  -webkit-transition: width 0.3s linear;
  transition: width 0.3s linear;
  border: none;
  background: url(../img/search.png) center no-repeat;
}
.h_nav_top .search.adaptive {
  position: relative;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: block !important;
  height: auto;
  padding-top: 5px;
  padding-bottom: 10px;
  background: #f4f5f6;
}
.h_nav_top .search.adaptive form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
.h_nav_top .search.adaptive input[type='submit'] {
  top: 5px;
  left: 0;
}
.h_nav_top .search.adaptive input[type='text'] {
  -webkit-box-flex: 1;
      -ms-flex: 1 auto;
          flex: 1 auto;
  margin-right: 10px;
}
.h_nav_top strong,
.h_nav_top b {
  font-weight: normal;
}
.top_menu .inner {
  padding-top: 0 !important;
}
.contacts.h_nav_top .call_me {
  margin-left: 10px;
}
.header .inner {
  padding: 50px 0 40px 0;
}
.header .inner:before {
  display: table;
  content: '';
}
.header .inner:after {
  display: table;
  content: '';
  clear: both;
}
.header .left {
  float: left;
}
.header .right {
  float: right;
}
.header .center {
  overflow: hidden;
}
.header .logo {
  font-family: 'Vremena Grotesk';
  font-size: 40px;
  text-align: center;
}
.header .logo a {
  font-size: inherit;
  text-decoration: none;
  text-transform: uppercase;
  color: inherit;
}
.header .logo-row p {
  margin: 0;
}
.header .logo-row a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
    flex-direction: column;
}
.header .logo-row a img {
  height: 2em !important;
  display: block;
  width: auto;
}
.header .logo-row a .logo-image {
  margin-right: 13px;
}
.header .slogan {
  font-family: 'Vremena Grotesk';
  font-size: 15px;
  margin-top: 10px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #a1536d;
}
.menu.top_menu ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
.menu.top_menu ul li {
  margin: 0;
  padding: 0;
  list-style-type: none;
  position: relative;
  padding: 0 18px;
  -webkit-box-flex: 1;
      -ms-flex: 1 auto;
          flex: 1 auto;
}
.menu.top_menu ul li a {
  font-family: 'Vremena Grotesk';
  font-size: 15px;
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #1e222f;
}
.menu.top_menu ul li .submenu a:hover {
  text-decoration: underline;
}
.menu.top_menu ul li:hover > a {
  z-index: 11;
  border-color: #d2d5d8 !important;
}
.menu.top_menu ul li:hover > .submenu {
  display: block;
}
.menu.top_menu ul li:hover > .submenu li .submenu {
  top: 0;
  left: 100%;
  padding-top: 5px;
}
.menu.top_menu .inner > ul > li {
  height: 47px;
}
.menu.top_menu .inner > ul > li > a {
  display: inline-block;
  width: 100%;
  height: 47px;
  padding: 15px 0 0 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0);
}
.menu.top_menu .inner > ul > li > a:hover {
  color: #a1536d;
  border-bottom: 2px solid #e5e5e5;
}
.menu.top_menu .inner > ul > li > a.active {
  color: #a1536d;
}
.menu.top_menu .menu_burger {
  display: none;
}
.menu.top_menu .submenu {
  font-size: 15px;
  font-weight: normal;
  position: absolute;
  z-index: 10;
  top: 47px;
  top: 0;
  right: 0;
  left: 0;
  display: none;
  padding: 52px 0 5px 0;
  text-align: center;
  border: 2px solid #d2d5d8;
  background: #fff;
}
.menu.top_menu .submenu li {
  display: block;
}
.menu.top_menu .submenu li a {
  font-size: 15px;
  font-weight: normal;
  padding: 5px 0 5px;
  text-transform: none;
  color: #222222;
}
.menu.top_menu .submenu li a:hover {
  color: #a1536d;
}
.menu.top_menu.opened {
  position: fixed;
  z-index: 1001;
  top: 0;
  right: 0;
  left: auto;
  display: block !important;
  width: 70vw;
  height: auto;
  min-height: 100%;
  padding: 62px 0 0 0;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
  -webkit-animation-name: top_menu_apperance;
          animation-name: top_menu_apperance;
  -webkit-animation-duration: 0.5s;
          animation-duration: 0.5s;
  background: #a1536d;
}
.menu.top_menu.opened .menu_burger {
  position: fixed;
  top: 22px;
  right: 10px;
  background: url('../img/close.png') center no-repeat;
  background-size: contain;
}
.menu.top_menu.opened .menu_burger span {
  background: #fff;
  display: none;
}
.menu.top_menu.opened .inner {
  min-width: auto;
}
.menu.top_menu.opened .inner ul {
  height: auto;
  padding: 0 0 10px 0;
}
.menu.top_menu.opened .inner ul li {
  display: block;
  height: auto;
}
.menu.top_menu.opened .inner ul li a {
  font-size: 16px;
  line-height: 26px;
  height: auto;
  padding: 0;
  text-align: left;
  min-height: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.menu.top_menu.opened .inner ul li.first-click > .submenu {
  display: block;
  position: static;
  opacity: 1;
  background: none;
  border: none;
  padding-top: 10px;
}
.menu.top_menu.opened .inner ul li.first-click > .submenu li a {
  color: #fff;
  padding-left: 10px;
  font-size: 15px;
  min-height: 32px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.footer_menu {
  margin-top: 17px;
}
.footer_menu ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
.footer_menu ul li {
  margin: 0;
  padding: 0;
  list-style-type: none;
  border-bottom: 2px solid #dcdbd7;
  -webkit-box-flex: 1;
      -ms-flex: 1 auto;
          flex: 1 auto;
}
.footer_menu ul li a {
  font-family: 'Vremena Grotesk';
  font-size: 15px;
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 10px 0 19px 0;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #1e222f;
  border-bottom: 1px solid #fff;
}
.footer_menu ul li:hover {
  border-color: #a1536d;
}
.footer_menu ul li:hover a {
  color: #a1536d;
  border-color: #a1536d;
}
.footer_menu ul li .submenu {
  display: none;
}
.footer_menu ul li.active {
  border-color: #a1536d;
}
.footer_menu ul li.active a {
  color: #a1536d;
  border-color: #a1536d;
}
.footer-logo-row {
  margin-top: -12px;
  font-size: 24px;
}
.footer-logo-row a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
    flex-direction: column;
}
.footer-logo-row .logo-image {
  margin-right: 10px;
}
.footer-logo-row .logo-image img {
  height: 2em;
  width: auto !important;
  display: block;
}
.catalog_block .h3 {
  font-family: 'Vremena Grotesk';
  font-size: 30px;
  font-weight: normal;
  margin-top: 0;
  text-transform: uppercase;
  color: #372124;
  margin-bottom: 10px;
}
.catalog_block .inset {
  padding: 0 55px;
}
.catalog_block > ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.catalog_block > ul > li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.catalog_block .catalog_menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  row-gap: 15px;
}
.catalog_block .catalog_menu > li {
  margin-right: 0;
  border: 1px solid #e5e5e5;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  overflow: hidden;
  width: 100%;
}
.catalog_block .catalog_menu > li:hover {
  border-color: #a1536d;
}
.catalog_block .catalog_menu > li .catalog_menu_item {
  -webkit-box-flex: 1;
      -ms-flex: 1 auto;
          flex: 1 auto;
  padding-bottom: 10px;
}
.catalog_block .catalog_menu > li .catalog_menu_item img {
  max-width: 100%;
  height: auto;
}
.catalog_block .catalog_menu > li .catalog_menu_item > a {
  padding: 16px 5px 0 5px;
  color: #1e222f;
  line-height: 1.4;
  text-transform: uppercase;
  text-align: center;
  color: #212121;
  display: block;
  text-decoration: none;
  margin: 0 0 7px 0;
  padding-left: 5px;
  padding-right: 5px;
}
.catalog_block .catalog_menu > li .catalog_menu_item > a:hover {
  color: #a1536d;
}
.catalog_block .catalog_menu > li .catalog_menu_item .uss_tree_description {
  padding-left: 5px;
  padding-right: 5px;
  margin-bottom: 5px;
  text-align: left;
}
.catalog_block .catalog_menu > li .catalog_menu_item .uss_tree_description p {
  margin: 0;
}
.catalog_block .catalog_menu > li .catalog_menu_item .uss_tree_description p p {
  margin-top: 7px;
}
.catalog_block .catalog_menu > li .catalog_menu_item .catalog_menu_image {
  margin-bottom: 7px;
}
.catalog_block .uss_catalog_sidebar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  row-gap: 15px;
}
.catalog_block .uss_catalog_sidebar .uss_catalog_category {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  padding-bottom: 3px;
  overflow: hidden;
}
.catalog_block .uss_catalog_sidebar .uss_catalog_category:hover {
  border-color: #a1536d;
}
.catalog_block .uss_catalog_sidebar .uss_catalog_category .uss_catalog_img_wrap {
  float: none;
  margin: 0 0 15px 0;
  width: 100%;
}
.catalog_block .uss_catalog_sidebar .uss_catalog_category .uss_catalog_cat_name {
  margin-bottom: 7px;
  text-align: center;
  width: 100%;
}
.catalog_block .uss_catalog_sidebar .uss_catalog_category .uss_catalog_cat_name a {
  text-transform: uppercase;
  text-align: center;
  color: #212121;
  display: block;
  text-decoration: none;
  padding-left: 5px;
  padding-right: 5px;
}
.catalog_block .uss_catalog_sidebar .uss_catalog_category .uss_catalog_cat_name a:hover {
  color: #a1536d;
}
.catalog_block .uss_catalog_sidebar .uss_catalog_category .uss_catlog_cat_anons {
  margin-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  text-align: left;
}
.catalog_block .uss_catalog_sidebar .uss_catalog_category .uss_catlog_cat_anons p {
  margin: 0;
}
.catalog_block .uss_catalog_sidebar .uss_catalog_category .uss_catlog_cat_anons p p {
  margin-top: 7px;
}
.catalog_block .uss_catalog_sidebar .uss_catalog_category .uss_catalog_cat_img {
  max-width: 100%;
  display: block;
  margin: 0 auto;
}
.catalog_block .uss_catalog_sidebar .uss_catalog_category .catalog_orderbutton {
  width: 100%;
  max-width: calc(100% - 20px);
  margin-left: 10px;
  margin-top: auto !important;
  line-height: 1;
  display: block;
  padding: 10px 12px 9px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 0;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  cursor: pointer;
  color: #a1536d;
  border: 2px solid #a1536d;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  text-shadow: none;
}
.catalog_block .uss_catalog_sidebar .uss_catalog_category .catalog_orderbutton:hover {
  background: #a1536d;
  color: #fff;
}
.catalog_block ul.uss_eshop_menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  row-gap: 15px;
}
.catalog_block ul.uss_eshop_menu > li {
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
  border: 1px solid #e5e5e5;
  padding-bottom: 10px;
  overflow: hidden;
  width: 100%;
}
.catalog_block ul.uss_eshop_menu > li:hover {
  border-color: #a1536d;
}
.catalog_block ul.uss_eshop_menu > li .eshop_menu_image {
  display: block;
  margin: 0 0 15px 0;
}
.catalog_block ul.uss_eshop_menu > li .eshop_menu_image > a {
  display: block;
}
.catalog_block ul.uss_eshop_menu > li .eshop_menu_image > a img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}
.catalog_block ul.uss_eshop_menu > li > a {
  text-transform: uppercase;
  text-align: center;
  color: #212121;
  display: block;
  text-decoration: none;
  margin: 0 0 0 0;
  padding-left: 5px;
  padding-right: 5px;
}
.catalog_block ul.uss_eshop_menu > li > a:hover {
  color: #a1536d;
}
.catalog_block ul.uss_eshop_menu > li .uss_tree_description {
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
}
.catalog_block ul.uss_eshop_menu > li .uss_tree_description p p {
  margin-top: 5px;
}
.footer {
  font-family: 'Vremena Grotesk';
  font-size: 15px;
  line-height: 1.3;
}
.footer table {
  display: inline-block;
}
.footer .inner {
  padding: 41px 0 20px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
}
.footer .left {
  text-align: left;
}
.footer .right {
  text-align: right;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
}
.footer .center {
  text-align: center;
  -webkit-box-flex: 1;
      -ms-flex: 1 auto;
          flex: 1 auto;
}
.footer .center a {
  text-decoration: none;
  color: inherit;
}
.footer .center img {
  display: inline-block;
  max-width: 100%;
}
.footer ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.footer ul li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.footer p {
  margin: 0;
}
.footer .dev {
  display: inline-block;
  padding: 0 0 9px 0;
}
.footer .copy {
  font-weight: normal;
  color: #999999;
}
.footer .contacts {
  line-height: 1.78;
}
.footer .contacts a {
  color: #222222;
}
.footer .contacts a:hover {
  text-decoration: none;
}
.footer .counters {
  display: none;
}
.footer .social {
  padding-top: 5px;
}
.uss_eshop_block_item {
  margin-bottom: 21px;
  padding: 0 0 0 0;
  border: 2px solid #e5e5e5;
  max-width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
.uss_eshop_block_item > div {
  max-width: 100%;
}
.uss_eshop_block_item .uss_shop_price {
  -webkit-box-flex: 1 !important;
      -ms-flex: 1 auto !important;
          flex: 1 auto !important;
  line-height: 1;
  display: inline-block;
  overflow: hidden;
  margin: 0;
  vertical-align: bottom;
  overflow: visible;
}
.uss_eshop_block_item .uss_shop_price span {
  padding: 0 !important;
  background: none !important;
}
.uss_eshop_block_item .uss_shop_price span.old_price {
  font-family: 'SegoeUI';
  font-size: 15px;
  display: block;
  color: #adb1b6;
}
.uss_eshop_block_item .uss_shop_price span.actual_price {
  font-weight: bold;
  font-family: 'SegoeUI';
  font-size: 23px;
  color: #a05e79;
}
.uss_eshop_block_item .uss_shop_name {
  margin-bottom: auto;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
}
.uss_eshop_block_item .uss_shop_name a {
  font-family: 'Vremena Grotesk';
  display: block;
  overflow: hidden;
  min-height: 2.4em;
  text-decoration: none;
  text-transform: uppercase;
  color: #1e222f;
  line-height: 1.2;
  margin-bottom: auto;
}
.uss_eshop_block_item .uss_shop_name a:hover {
  color: #a1536d;
}
.uss_eshop_block_item .price_buy {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding-right: 0 !important;
  padding-left: 10px;
}
.uss_eshop_block_item .img {
  margin: 0 0 18px 0;
  text-align: center;
}
.uss_eshop_block_item .img a img {
  max-width: 100%;
  height: auto;
  display: inline-block;
}
.uss_eshop_block_item:hover {
  border-color: #a1536d;
}
.uss_eshop_block_item a.add_to_cart {
  font-size: 0;
  position: relative;
  right: -2px;
  display: inline-block;
  width: 44px;
  height: 44px;
  margin-bottom: -2px;
  vertical-align: bottom;
  text-indent: -9999px;
  background: url(../img/cart_icon.png) center no-repeat, #8f546c;
}
.uss_eshop_block_item a.add_to_cart:hover {
  opacity: 0.8;
  background-color: #222222 !important;
}
.uss_eshop_block_item .uss_eshop_amount_block {
  display: none;
}
.uss_shop_list_view_item {
  margin-bottom: 21px;
  padding: 0 0 0 0;
  border: 2px solid #e5e5e5;
}
.uss_shop_list_view_item:not(.uss_shop_list_view_item) {
  width: 224px;
}
.uss_shop_list_view_item .img {
  margin: 0 0 18px -24px;
  text-align: center;
}
.uss_shop_list_view_item .img a img {
  max-width: 100%;
  height: auto;
  display: inline-block;
}
.uss_shop_list_view_item:hover {
  border-color: #a1536d;
}
.uss_shop_list_view_item .uss_shop_name {
  margin: 0 0 6px 0;
}
.uss_shop_list_view_item .uss_shop_name a {
  font-family: 'Vremena Grotesk';
  font-size: 15px;
  display: block;
  overflow: hidden;
  height: 44px;
  text-decoration: none;
  text-transform: uppercase;
  color: #1e222f;
}
.uss_shop_list_view_item .uss_shop_name a:hover {
  color: #a1536d;
}
.uss_shop_list_view_item .uss_shop_price {
  line-height: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  overflow: hidden;
  margin: 0 10px 10px 0 !important;
  padding: 0 0 5px 0;
  min-height: 45px;
}
.uss_shop_list_view_item .uss_shop_price span {
  padding: 0 !important;
  background: none !important;
}
.uss_shop_list_view_item .uss_shop_price span.old_price {
  font-family: 'SegoeUI';
  font-size: 15px;
  display: block;
  color: #adb1b6 !important;
}
.uss_shop_list_view_item .uss_shop_price span.actual_price {
  font-weight: bold;
  font-family: 'SegoeUI';
  font-size: 23px;
  color: #a05e79;
}
.uss_shop_list_view_item a.add_to_cart {
  font-size: 0;
  position: relative;
  right: -2px;
  display: inline-block;
  width: 44px;
  height: 44px;
  margin-bottom: -2px;
  vertical-align: bottom;
  text-indent: -9999px;
  background: url(../img/cart_icon.png) center no-repeat, #8f546c;
}
.uss_shop_list_view_item a.add_to_cart:hover {
  opacity: 0.8;
  background-color: #222222 !important;
}
.uss_shop_list_view_item a.add_to_cart.already_in_cart {
  background-color: #222222 !important;
}
.uss_shop_list_view_item .uss_shop_technical_data {
  display: block;
  overflow: hidden;
}
.uss_shop_list_view_item .uss_shop_technical_data .btns {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
}
.uss_shop_list_view_item .uss_shop_technical_data .buttons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  row-gap: 10px;
}
.uss_shop_list_view_item .uss_shop_technical_data .buttons > * {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-column-gap: 10px;
          column-gap: 10px;
  row-gap: 10px;
}
.uss_shop_list_view_item .uss_shop_technical_data .buttons > * > * {
  margin: 0 !important;
}
.uss_shop_list_view_item .uss_shop_technical_data .buttons .price-buy_btn-extra {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}
.uss_shop_list_view_item .uss_compare_by a {
  text-decoration: none;
  display: inline-block;
  min-height: 20px;
  background: url('../img/compare.png') 5px center no-repeat no-repeat;
  padding-left: 30px;
}
.uss_shop_list_view_item .uss_compare_by a:hover {
  text-decoration: underline;
}
.uss_shop_list_view_item .uss_shop_put_wrap a {
  text-decoration: none;
  display: inline-block;
  min-height: 20px;
  background: url('../img/fav.png') 5px center no-repeat no-repeat;
  padding-left: 30px;
}
.uss_shop_list_view_item .uss_shop_put_wrap a:hover {
  text-decoration: underline;
}
.uss_shop_list_view_item .btns {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  width: 100%;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
  -webkit-column-gap: 20px;
          column-gap: 20px;
  row-gap: 10px;
}
.uss_shop_list_view_item .btns .uss_shop_price {
  margin: 0 !important;
}
.uss_eshop_block_item.uss_shop_list_view_item .uss_img_holder {
  border: none;
}
.uss_eshop_block_item.uss_shop_list_view_item .uss_shop_name a {
  height: auto;
  font-size: 18px;
}
.uss_eshop_block_item.uss_shop_list_view_item .uss_shop_technical_data {
  padding-top: 20px;
  padding-bottom: 20px;
}
.uss_eshop_block_item.uss_shop_list_view_item .uss_shop_by {
  display: inline-block;
  vertical-align: middle;
}
.uss_eshop_block_item.uss_shop_list_view_item .uss_shop_by.uss_shop_buy_one_click {
  margin-left: 10px;
}
.uss_eshop_block_item.uss_shop_list_view_item a.add_to_cart {
  font-size: inherit;
  right: 0;
  display: inline-block;
  width: auto;
  height: auto;
  line-height: 44px;
  margin-bottom: 0;
  text-indent: 0;
  color: #ffffff;
  padding-left: 35px;
  padding-right: 10px;
  text-align: left;
  background-position: 5px center;
  text-decoration: none;
  font-family: inherit;
}
.uss_shop_list_view_item.uss_shop_list_view_item .uss_img_holder {
  border: none;
}
.uss_shop_list_view_item.uss_shop_list_view_item .uss_shop_name a {
  height: auto;
  font-size: 18px;
}
.uss_shop_list_view_item.uss_shop_list_view_item .uss_shop_technical_data {
  padding-top: 20px;
  padding-bottom: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  row-gap: 0.5em;
}
.uss_shop_list_view_item.uss_shop_list_view_item .uss_shop_technical_data > div {
  margin-bottom: 0 !important;
  margin-top: 0 !important;
}
.uss_shop_list_view_item.uss_shop_list_view_item .uss_shop_by {
  display: inline-block;
  vertical-align: middle;
}
.uss_shop_list_view_item.uss_shop_list_view_item .uss_shop_by.uss_shop_buy_one_click {
  margin-left: 10px;
}
.uss_shop_list_view_item.uss_shop_list_view_item a.add_to_cart {
  font-size: inherit;
  right: 0;
  display: inline-block;
  width: auto;
  height: auto;
  line-height: 44px;
  margin-bottom: 0;
  text-indent: 0;
  color: #ffffff;
  padding-left: 35px;
  padding-right: 10px;
  text-align: left;
  background-position: 5px center;
  text-decoration: none;
  font-family: inherit;
}
.uss_shop_list_view_item.uss_shop_list_view_item a.add_to_cart.already_in_cart {
  background-image: none;
  padding-left: 10px;
}
.uss_eshop_filters_block {
  padding: 25px;
  border: 2px solid #e5e5e5;
}
.uss_eshop_filters_block form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
  -webkit-column-gap: 10px;
          column-gap: 10px;
  row-gap: 10px;
}
.uss_eshop_filters_block form .filter_search_in_current_cat {
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
}
.uss_eshop_filters_block form .filter_search_in_current_cat label {
  font-size: 15px;
}
.uss_eshop_filters_block form .filter_item {
  max-width: 100%;
}
.uss_eshop_filters_block form .filter_item.filter_price {
  margin-bottom: 0;
}
.uss_eshop_filters_block form .filter_item.filter_price .jq-selectbox {
  margin-bottom: 0;
}
.uss_eshop_filters_block form .filter_item.filter_producer {
  margin-bottom: 0;
}
.uss_eshop_filters_block form .filter_item.filter_producer .jq-selectbox {
  margin-bottom: 0;
}
.uss_eshop_filters_block form .filter_submit {
  margin-bottom: 0;
}
.uss_eshop_filters_block form .filter_submit .jq-selectbox {
  margin-bottom: 0;
}
.uss_eshop_filters_block form .filter_submit input {
  font-family: 'Vremena Grotesk';
  font-size: 15px;
  display: inline-block;
  min-width: 79px;
  padding-right: 13px;
  padding-left: 13px;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  color: #a1536d;
  border: 2px solid #a1536d;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  text-shadow: none;
}
.uss_eshop_filters_block form .filter_submit button {
  font-family: 'Vremena Grotesk';
  font-size: 15px;
  display: inline-block;
  min-width: 79px;
  padding-right: 13px;
  padding-left: 13px;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  color: #a1536d;
  border: 2px solid #a1536d;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  text-shadow: none;
  color: #1e222f;
  border-color: #372124;
}
.uss_eshop_filters_block form .filter_submit button:hover {
  color: #ffffff;
  background: #a1536d;
  background: #222;
}
.uss_eshop_filters_block form .group {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0 0 20px 0;
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}
.uss_eshop_filters_block form .group .eshop_filters_group_title {
  font-weight: bold;
  font-family: 'SegoeUI';
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
}
.uss_eshop_filters_block form .group .eshop_filters_items {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-column-gap: 10px;
          column-gap: 10px;
  row-gap: 7px;
}
.uss_eshop_filters_block form .group .eshop_filters_items .eshop_filters {
  -webkit-box-flex: 1;
      -ms-flex: 1 calc((100% - 20px) / 3);
          flex: 1 calc((100% - 20px) / 3);
  margin: 0;
}
.uss_eshop_filters_block form .group .eshop_filters_items .eshop_filters label.items_label {
  font-family: 'SegoeUI';
  font-size: 15px;
  font-weight: bold;
  margin: 0 0 9px 0;
  text-transform: uppercase;
  color: #1e222f;
  text-shadow: none;
  float: none;
  padding: 0;
  display: block;
  width: 100%;
}
.uss_eshop_filters_block form .group .eshop_filters_items .eshop_filters .items_wrap {
  line-height: 30px;
}
.uss_eshop_filters_block form .filter_price .inputs {
  line-height: 38px;
  display: inline-block;
}
.uss_eshop_filters_block form .filter_price .inputs input {
  font-weight: bold;
  font-family: 'SegoeUI';
  font-size: 15px;
  display: inline-block;
  width: 61px;
  padding-left: 4px;
  text-align: left;
  border: 1px solid #e5e5e5;
  text-shadow: none;
  padding-top: 4px;
  padding-bottom: 4px;
  height: 38px;
}
.uss_eshop_filters_block form > .filter_item {
  -webkit-box-flex: 1;
      -ms-flex: 1 calc((100% - 30px) / 4);
          flex: 1 calc((100% - 30px) / 4);
  margin: 0 !important;
}
.uss_eshop_filters_block form > .filter_item label {
  font-family: 'SegoeUI';
  font-size: 15px;
  font-weight: bold;
  margin: 0 0 9px 0;
  text-transform: uppercase;
  color: #1e222f;
  text-shadow: none;
  float: none;
  padding: 0;
  display: block;
  width: 100%;
}
.uss_eshop_filters_block .jq-selectbox {
  width: 100%;
}
.uss_eshop_filters_block .jq-selectbox .jq-selectbox__select {
  width: 100%;
  border: 1px solid #d0d5d9;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  text-shadow: none;
  height: 38px;
}
.uss_eshop_filters_block .jq-selectbox .jq-selectbox__select .jq-selectbox__select-text {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-size: 16px;
}
.uss_eshop_filters_block .jq-selectbox .jq-selectbox__select .jq-selectbox__trigger {
  opacity: 1;
  border: none !important;
  background: url(../img/filter-arr.png) center no-repeat;
}
.uss_eshop_filters_block .jq-selectbox .jq-selectbox__select .jq-selectbox__trigger .jq-selectbox__trigger-arrow {
  border: none;
}
.uss_eshop_filters_block .jq-checkbox {
  -webkit-box-sizing: content-box;
          box-sizing: content-box;
  border: 1px solid #828282;
  border-radius: 0;
  background: #fff;
}
.uss_eshop_filters_block .jq-checkbox.checked .jq-checkbox__div {
  width: 100%;
  height: 100%;
  margin: 0;
  background: url(../img/filter_checkbox.png) center no-repeat;
  -webkit-box-shadow: none;
          box-shadow: none;
  text-shadow: none;
}
.uss_eshop_filters_block .jSliderWrap .jslider .l {
  background-image: url(../img/filter_slider_bg.png);
  background-repeat: repeat-x;
  background-position: 0 0;
}
.uss_eshop_filters_block .jSliderWrap .jslider .f {
  background-image: url(../img/filter_slider_bg.png);
  background-repeat: repeat-x;
  background-position: 0 0;
}
.uss_eshop_filters_block .jSliderWrap .jslider .r {
  background-image: url(../img/filter_slider_bg.png);
  background-repeat: repeat-x;
  background-position: 0 0;
}
.uss_eshop_filters_block .jSliderWrap .jslider .v {
  background-image: url(../img/filter_slider_bg.png);
  background-repeat: repeat-x;
  background-position: 0 0;
}
.uss_eshop_filters_block .jSliderWrap .jslider .jslider-pointer {
  background: url(../img/filter_slider.png) center no-repeat;
}
.uss_eshop_filters_block .jSliderWrap .jslider .jslider-scale ins {
  font-size: 15px;
  color: #1e222f;
}
.uss_eshop_filters_block .filter_price input.styler:not([type='submit']) {
  padding-left: 5px;
  padding-right: 5px;
  text-align: center;
}
.aside .content .uss_eshop_filters_block form .group .eshop_filters_items .eshop_filters {
  -webkit-box-flex: 1;
      -ms-flex: 1 calc((100% - 10px) / 2);
          flex: 1 calc((100% - 10px) / 2);
  max-width: calc((100% - 10px) / 2);
  margin-right: 0;
}
.aside .uss_widget_outer_content {
  display: block !important;
}
.aside .news_block_item {
  font-size: 15px;
}
.eshop_filters label.items_label {
  font-family: 'SegoeUI';
  font-size: 15px;
  font-weight: bold;
  margin: 0 0 9px 0;
  text-transform: uppercase;
  color: #1e222f;
  text-shadow: none;
  float: none;
  padding: 0;
  display: block;
  width: 100%;
}
.jq-selectbox__select {
  width: 100%;
  border: 1px solid #d0d5d9;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  text-shadow: none;
}
.uss_shop_block_cat .uss_shop_category {
  margin-right: 0;
  border: 2px solid #e5e5e5;
  max-width: calc((100% - 10px) / 2);
  display: block;
}
.uss_shop_block_cat .uss_shop_category:hover {
  border-color: #a1536d;
}
.uss_shop_block_cat .uss_shop_category .uss_shop_cat_img_wrap {
  margin: 0 auto ;
}
.uss_shop_block_cat .uss_shop_category .uss_shop_cat_img_wrap .uss_shop_cat_img {
  position: relative;
  margin: 0 auto;
  border: none;
  display: block;
}
.uss_shop_block_cat .uss_shop_category .uss_shop_cat_img_wrap .uss_shop_cat_img a {
  margin: 0;
}
.uss_shop_block_cat .uss_shop_category .uss_shop_cat_img_wrap .uss_shop_cat_img a img {
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}
.uss_shop_block_cat .uss_shop_category .uss_shop_cat_name {
  padding: 23px 5px 13px 15px;
}
.uss_shop_block_cat .uss_shop_category .uss_shop_cat_name a {
  font-family: 'Vremena Grotesk';
  font-size: 15px;
  display: inline;
  padding: 0;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #1e222f;
}
.uss_shop_block_cat .uss_shop_category .uss_shop_cat_name a:hover {
  color: #a1536d;
}
.uss_shop_block_cat .uss_shop_category .uss_shop_cat_cat {
  padding-left: 15px;
  padding-bottom: 15px;
}
.uss_shop_block_cat .uss_shop_cat_text {
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  font-size: inherit;
  line-height: 1.25;
}
.uss_shop_list_cat .uss_shop_category {
  margin-right: 0;
  border: 2px solid #e5e5e5;
  display: block;
}
.uss_shop_list_cat .uss_shop_category:hover {
  border-color: #a1536d;
}
.uss_shop_list_cat .uss_shop_category .uss_shop_cat_img_wrap {
  margin: 0 20px 0 0;
}
.uss_shop_list_cat .uss_shop_category .uss_shop_cat_img_wrap .uss_shop_cat_img {
  position: relative;
  margin: 0 auto;
  border: none;
  display: block;
}
.uss_shop_list_cat .uss_shop_category .uss_shop_cat_img_wrap .uss_shop_cat_img a {
  margin: 0;
}
.uss_shop_list_cat .uss_shop_category .uss_shop_cat_img_wrap .uss_shop_cat_img a img {
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}
.uss_shop_list_cat .uss_shop_category .uss_shop_cat_name {
  padding: 23px 5px 10px 15px;
  margin: 0;
}
.uss_shop_list_cat .uss_shop_category .uss_shop_cat_name a {
  font-family: 'Vremena Grotesk';
  font-size: 15px;
  display: inline;
  padding: 0;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #1e222f;
}
.uss_shop_list_cat .uss_shop_category .uss_shop_cat_name a:hover {
  color: #a1536d;
}
.uss_shop_list_cat .uss_shop_category .uss_shop_cat_cat {
  padding-left: 15px;
  padding-bottom: 15px;
  padding-top: 0;
  margin-top: 0;
}
.uss_shop_list_cat .uss_shop_cat_text {
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  font-size: inherit;
  line-height: 1.25;
  margin: 0;
}
.uss_catalog_block_cat .uss_catalog_category {
  margin-right: 0;
  border: 2px solid #e5e5e5;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
.uss_catalog_block_cat .uss_catalog_category:hover {
  border-color: #a1536d;
}
.uss_catalog_block_cat .uss_catalog_category .uss_catalog_cat_img {
  border: none;
  -webkit-box-flex: 0;
      -ms-flex: 0 auto;
          flex: 0 auto;
  max-width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}
.uss_catalog_block_cat .uss_catalog_category .uss_catalog_cat_img a {
  margin: 0;
}
.uss_catalog_block_cat .uss_catalog_category .uss_catalog_cat_img img {
  max-width: 100%;
  height: auto;
}
.uss_catalog_block_cat .uss_catalog_category .catalog_info {
  margin-left: -2px;
}
.uss_catalog_block_cat .uss_catalog_category .catalog_info .uss_catalog_cat_name a {
  font-family: 'Vremena Grotesk';
  font-size: 15px;
  display: block;
  padding: 23px 5px 13px 5px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #222222;
}
.uss_catalog_block_cat .uss_catalog_category .catalog_info .catalog_orderbutton {
  width: 100%;
}
.uss_catalog_list_cat .uss_catalog_category {
  margin-right: 0;
  border: 2px solid #e5e5e5;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
.uss_catalog_list_cat .uss_catalog_category:hover {
  border-color: #a1536d;
}
.uss_catalog_list_cat .uss_catalog_category .uss_catalog_cat_img {
  border: none;
  height: auto !important;
  -webkit-box-flex: 0;
      -ms-flex: 0 auto;
          flex: 0 auto;
  max-width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  max-width: 37vw;
}
.uss_catalog_list_cat .uss_catalog_category .uss_catalog_cat_img a {
  margin: 0;
}
.uss_catalog_list_cat .uss_catalog_category .uss_catalog_cat_img img {
  max-width: 100%;
  height: auto;
}
.uss_catalog_list_cat .uss_catalog_category .catalog_info {
  margin-left: -2px;
}
.uss_catalog_list_cat .uss_catalog_category .catalog_info .uss_catalog_cat_name a {
  font-family: 'Vremena Grotesk';
  font-size: 15px;
  display: block;
  padding: 23px 5px 13px 5px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #222222;
}
.uss_catalog_list_cat .uss_catalog_category .catalog_info .catalog_orderbutton {
  width: 100%;
}
.section .uss_catalog_block_cat.uss_catalog_list_cat .uss_catalog_category {
  display: block;
}
.section .uss_catalog_block_cat.uss_catalog_list_cat .uss_catalog_category .uss_catalog_cat_name {
  padding-top: 20px;
  padding-bottom: 10px;
}
.section .uss_catalog_list_cat.uss_catalog_list_cat .uss_catalog_category {
  display: block;
}
.section .uss_catalog_list_cat.uss_catalog_list_cat .uss_catalog_category .uss_catalog_cat_name {
  padding-top: 20px;
  padding-bottom: 10px;
}
.block {
  margin-bottom: 20px;
}
.block .h3 {
  font-size: 19px;
  margin-bottom: 26px;
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
}
.block.big_block {
  overflow: hidden;
  width: 100%;
}
.block.news {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  margin-top: 10px;
}
.block.news .uss_widget_outer_content {
  row-gap: 40px;
}
.block.news .news_block_item {
  font-size: 15px;
  width: calc((100% - 60px) / 2);
  margin-bottom: 0;
}
.block.news .news_block_item .image {
  display: block;
  margin: 0 0 6px 0;
  float: none;
}
.block.news .news_block_item .image img {
  display: block;
  max-width: 100%;
}
.block.news .news_block_item .title {
  display: inline;
}
.block.news .news_block_item .title a {
  display: inline;
}
.block.news .news_block_item .title .commentsAmount {
  margin-left: 10px;
  font-size: 14px !important;
  text-decoration: none;
}
.block.news .news_block_item .title .commentsAmount img {
  display: inline;
  vertical-align: bottom;
  margin-bottom: 2px;
}
.block.news .news_block_item .preview {
  display: block;
  width: 100%;
  margin-top: 5px;
}
.block.news .news_block_item .date {
  color: #adb1b6;
}
.block.news.x3 .news_block_item {
  width: calc((100% - 60px) / 3);
}
.block.news.articles .info .date {
  display: none !important;
}
.uss_cleaner {
  display: none !important;
}
.uss_news.news_exact_item {
  margin: 0;
}
.uss_news.news_exact_item .news_item .date,
.uss_news.news_exact_item .news_item .uss_news_date {
  color: #adb1b6;
}
.uss_news.news_exact_item .uss_news_date {
  color: #adb1b6;
}
.uss_news.news_exact_item .uss_news_back {
  margin-bottom: 24px;
}
.news_similar_wrap {
  margin: 0;
}
.news_similar_wrap .news_item .image {
  margin-bottom: 6px;
}
.news_similar_wrap .news_item .date {
  color: #adb1b6;
}
.singlepage .uss_section_content {
  display: block;
}
.singlepage .uss_section_content > div {
  width: 100%;
  max-width: 100%;
}
.singlepage .uss_section_content .uss_eshop_filters {
  margin-bottom: 24px;
}
.singlepage .uss_section_content .comment_form_block {
  margin-top: 24px;
  margin-bottom: 24px;
}
.singlepage .uss_section_content > .uss_ok_form {
  margin-top: 24px;
}
table.block.review table {
  margin-top: 20px;
}
.block.review {
  margin-bottom: 0;
}
.block.review table p {
  margin: 0;
}
.block.photoalbum .uss_images_block {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}
.block.photoalbum .uss_images_block .uss_one_image img {
  border: 2px solid #e5e5e5;
}
.block.photoalbum .uss_images_block .uss_one_image .name a {
  font-size: 15px;
  font-weight: bold;
  color: #222222;
}
.catalog_block.x5 ul.uss_eshop_menu > li {
  max-width: calc((100% - 40px) / 5);
}
.catalog_block.x5 .uss_catalog_sidebar .uss_catalog_category {
  max-width: calc((100% - 40px) / 5);
}
.catalog_block.x5 .catalog_menu li {
  max-width: calc((100% - 40px) / 5);
}
.catalog_block.x4 ul.uss_eshop_menu > li {
  max-width: calc((100% - 30px) / 4);
}
.catalog_block.x4 .uss_catalog_sidebar .uss_catalog_category {
  max-width: calc((100% - 30px) / 4);
}
.catalog_block.x4 .catalog_menu li {
  max-width: calc((100% - 30px) / 4);
}
.catalog_block.x3 ul.uss_eshop_menu > li {
  max-width: calc((100% - 20px) / 3);
}
.catalog_block.x3 .uss_catalog_sidebar .uss_catalog_category {
  max-width: calc((100% - 20px) / 3);
}
.catalog_block.x3 .catalog_menu li {
  max-width: calc((100% - 20px) / 3);
}
.catalog_block.x2 ul.uss_eshop_menu > li {
  max-width: calc((100% - 10px) / 2);
}
.catalog_block.x2 .uss_catalog_sidebar .uss_catalog_category {
  max-width: calc((100% - 10px) / 2);
}
.catalog_block.x2 .catalog_menu li {
  max-width: calc((100% - 10px) / 2);
}
.colorStyle3 .catalog_block.x4 ul.uss_eshop_menu > li,
.colorStyle5 .catalog_block.x4 ul.uss_eshop_menu > li,
.colorStyle6 .catalog_block.x4 ul.uss_eshop_menu > li {
  max-width: calc((100% - 120px) / 4);
}
.colorStyle3 .catalog_block.x4 .uss_catalog_sidebar .uss_catalog_category,
.colorStyle5 .catalog_block.x4 .uss_catalog_sidebar .uss_catalog_category,
.colorStyle6 .catalog_block.x4 .uss_catalog_sidebar .uss_catalog_category {
  max-width: calc((100% - 120px) / 4);
}
.colorStyle3 .catalog_block.x4 .catalog_menu li,
.colorStyle5 .catalog_block.x4 .catalog_menu li,
.colorStyle6 .catalog_block.x4 .catalog_menu li {
  max-width: calc((100% - 120px) / 4);
}
.eshop_block ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.eshop_block ul li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.eshop_block .uss_eshop_menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}
.eshop_block .uss_eshop_menu > li {
  margin-bottom: 20px !important;
  border: 2px solid #e5e5e5;
  overflow: hidden;
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
  width: 100%;
}
.eshop_block .uss_eshop_menu > li:hover {
  border-color: #a1536d;
}
.eshop_block .uss_eshop_menu > li > span {
  position: relative;
  display: block;
  height: 228px;
}
.eshop_block .uss_eshop_menu > li > a {
  font-family: 'Vremena Grotesk';
  font-size: 15px;
  display: block;
  padding: 23px 5px 13px 5px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #1e222f;
}
.eshop_block .uss_eshop_menu > li > a:hover {
  color: #a1536d;
}
.eshop_block .uss_eshop_menu li a img {
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 100%;
  height: auto;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}
.eshop_block.x5 .uss_eshop_menu > li {
  max-width: 178px;
}
.eshop_block.x4 .uss_eshop_menu > li {
  max-width: 225px;
}
.eshop_block.x3 .uss_eshop_menu > li {
  max-width: 304px;
}
.eshop_block.x2 .uss_eshop_menu > li {
  max-width: 461px;
}
.singlepage h1 {
  margin-bottom: 10px;
}
.singlepage .bread {
  margin-bottom: 30px;
}
.singlepage .inset {
  padding: 0;
}
.singlepage .module_catalog {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  row-gap: 24px;
}
.singlepage .module_catalog > div {
  max-width: 100%;
}
.singlepage .module_catalog .catalog_order_form h3 {
  font-family: 'Vremena Grotesk';
  font-size: 19px;
  font-weight: normal;
  margin-bottom: 18px;
  text-transform: uppercase;
  margin-top: 0;
}
.buy_one_click_form_tml .uss_buy_one_click_title {
  font-family: 'Vremena Grotesk';
  font-size: 25px;
  text-align: center;
  display: block;
  font-weight: normal;
  margin-bottom: 20px;
  color: #161c2c;
}
.buy_one_click_form_tml .uss_onepos_info .uss_shop_price {
  display: inline-block;
  margin-right: 39px;
  vertical-align: middle;
}
.buy_one_click_form_tml .uss_onepos_info .uss_shop_price span {
  font-weight: bold;
  font-family: 'SegoeUI';
  margin: 0;
  padding: 0;
  background: none !important;
}
.buy_one_click_form_tml .uss_onepos_info .uss_shop_price div {
  font-weight: bold;
  font-family: 'SegoeUI';
  margin: 0;
  padding: 0;
  background: none !important;
}
.buy_one_click_form_tml .uss_onepos_info .uss_shop_price span.price {
  color: #a1536d;
}
.buy_one_click_form_tml .uss_onepos_info .uss_shop_price div.price {
  color: #a1536d;
}
.buy_one_click_form_tml .uss_onepos_info .uss_shop_price span.old_price {
  display: block;
  color: #b0b6bc;
  font-weight: normal;
}
.buy_one_click_form_tml .uss_onepos_info .uss_shop_price div.old_price {
  display: block;
  color: #b0b6bc;
  font-weight: normal;
}
.buy_one_click_form_tml .uss_onepos_info .uss_shop_by {
  display: inline-block;
  vertical-align: bottom;
}
.buy_one_click_form_tml .uss_onepos_info .uss_shop_by a.add_to_cart {
  font-size: 0;
  position: relative;
  right: -2px;
  display: inline-block;
  width: 44px;
  height: 44px;
  margin-bottom: -2px;
  vertical-align: bottom;
  text-indent: -9999px;
  background: url(../img/cart_icon.png) center no-repeat, #8f546c;
}
.buy_one_click_form_tml .uss_onepos_info .uss_shop_by a.add_to_cart:hover {
  background-color: #222222;
}
.buy_one_click_form_tml .uss_onepos_info .uss_shop_by a.add_to_cart.already_in_cart {
  background-color: #a1536d;
}
.buy_one_click_form_tml .uss_onepos_info .uss_shop_by.uss_shop_buy_one_click {
  display: block;
  clear: both;
}
.buy_one_click_form_tml .uss_onepos_info .uss_shop_by.uss_shop_buy_one_click a.add_to_cart {
  font-weight: bold;
  font-family: 'SegoeUI';
  font-size: 15px;
  display: inline-block;
  width: auto;
  padding: 13px 10px 0 48px;
  text-align: center;
  text-indent: 0;
  color: #ffffff;
  background-position: 13px center;
}
.buy_one_click_form_tml .uss_onepos_info .amount_title {
  font-family: 'SegoeUI';
  font-size: 15px;
}
.buy_one_click_form_tml .uss_onepos_info .basket_amount_class {
  font-family: 'SegoeUI';
  font-size: 15px;
  display: inline-block;
  width: 32px;
  height: 32px;
  text-align: center;
}
.buy_one_click_form_tml .buy_one_click_window_wrap {
  -webkit-box-sizing: content-box !important;
          box-sizing: content-box !important;
}
.buy_one_click_form_tml .buy_one_click_window_wrap form,
.buy_one_click_form_tml .buy_one_click_window_wrap .fc_form_tml {
  margin-bottom: 0;
}
.buy_one_click_form_tml .buy_one_click_window_wrap .fc_form_tml .group .fc_item input {
  width: 100%;
}
.buy_one_click_form_tml .buy_one_click_window_wrap .fc_form_tml .group .fc_item textarea {
  width: 100%;
}
.buy_one_click_form_tml .buy_one_click_window_wrap .fc_form_tml .buttons input {
  width: 100%;
}
.section_eshop .uss_shop_detail {
  margin: 0;
}
.section_eshop .uss_shop_detail .uss_img_wrapper .uss_img_big {
  border: 2px solid #b0b6bc;
}
.section_eshop .uss_shop_detail .uss_img_wrapper .uss_img_big .uss_img_big_image .uss_eshop_icons {
  background: none !important;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_description {
  margin-bottom: 0.8em;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_amount_left {
  margin-bottom: 5px;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_producer {
  margin-bottom: 5px;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_uid {
  margin-bottom: 5px;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .eshop_filters_area {
  margin-top: 0;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_price {
  margin-right: 39px;
  vertical-align: middle;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: start !important;
      -ms-flex-align: start !important;
          align-items: flex-start !important;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_price span {
  font-weight: bold;
  font-family: 'SegoeUI';
  margin: 0;
  padding: 0;
  background: none !important;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_price span.price {
  color: #a1536d;
  font-size: 25px;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_price span.old_price {
  display: block;
  font-weight: normal;
  color: #b0b6bc;
  font-size: 16px;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_by {
  display: inline-block;
  vertical-align: bottom;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_by a.add_to_cart {
  position: relative;
  right: -2px;
  display: inline-block;
  margin-bottom: -2px;
  vertical-align: bottom;
  background: url(../img/cart_icon.png) 13px center no-repeat, #8f546c;
  font-size: 15px;
  color: #fff;
  padding: 13px 10px 13px 47px;
  text-decoration: none;
  font-weight: bold;
  font-family: 'SegoeUI';
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_by a.add_to_cart:hover {
  background-color: #222222;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_by a.add_to_cart.already_in_cart {
  background-color: #a1536d;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_by.uss_shop_buy_one_click a.add_to_cart {
  font-weight: bold;
  font-family: 'SegoeUI';
  font-size: 15px;
  display: inline-block;
  width: auto;
  padding: 13px 10px 13px 47px;
  text-align: center;
  text-indent: 0;
  color: #ffffff;
  background-position: 13px center;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .uss_compare_by {
  display: inline-block;
  vertical-align: middle;
  margin: 0 5px 5px 0;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .uss_compare_by a {
  display: inline-block;
  text-decoration: none;
  background: url('../img/compare.png') 5px center no-repeat;
  padding-left: 30px;
  min-height: 20px;
  padding-right: 5px;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .uss_compare_by a:hover {
  text-decoration: underline;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_put_wrap {
  display: inline-block;
  vertical-align: middle;
  margin: 0 5px 5px 0;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_put_wrap a {
  text-decoration: none;
  background: url('../img/fav.png') 5px center no-repeat;
  padding-left: 30px;
  min-height: 20px;
  padding-right: 5px;
  display: inline-block;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_put_wrap a:hover {
  text-decoration: underline;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .amount_title {
  font-family: 'SegoeUI';
  font-size: 15px;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .basket_amount_class {
  font-family: 'SegoeUI';
  font-size: 15px;
  display: inline-block;
  width: 32px;
  height: 32px;
  text-align: center;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .buttons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  width: 100%;
  -webkit-box-align: start !important;
      -ms-flex-align: start !important;
          align-items: flex-start !important;
  margin-top: 25px;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .buttons > div {
  margin: 0 10px 0 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .buttons > div > div {
  margin: 0 10px 0 0;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .buy_btns {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 62px;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .buy_buttons {
  -webkit-box-flex: 1;
      -ms-flex: 1 auto;
          flex: 1 auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: start !important;
      -ms-flex-align: start !important;
          align-items: flex-start !important;
}
.section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_by {
  margin: 0 5px 10px 0;
}
div.uss_tabs {
  margin-bottom: 0;
}
div.uss_tabs div.uss_tabs_navigation span {
  background: #222;
}
div.uss_tabs div.uss_tabs_navigation span.selected {
  color: #ffffff;
  background: #a1536d;
}
div.uss_tabs div.tab_items {
  border-color: #a1536d;
  -webkit-box-shadow: none;
          box-shadow: none;
}
.h3.h_op {
  font-family: 'Vremena Grotesk';
  font-size: 19px;
  font-weight: normal;
  margin-bottom: 0;
  text-transform: uppercase;
  padding: 0 !important;
  margin-top: 24px;
  margin-bottom: 24px;
}
.uss_eshop_sameproducts.blocks .item {
  overflow: visible;
  border: 1px solid #e5e5e5;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
.uss_eshop_sameproducts.blocks .item .info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  -webkit-box-flex: 1;
      -ms-flex: 1 auto;
          flex: 1 auto;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  row-gap: 10px;
  padding-bottom: 0;
  padding-right: 0;
}
.uss_eshop_sameproducts.blocks .item .info > div {
  max-width: 100%;
  margin-bottom: 0 !important;
  margin-top: 0 !important;
}
.uss_eshop_sameproducts.blocks .item .info .title {
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
  width: 100%;
  padding-right: 10px;
}
.uss_eshop_sameproducts.blocks .item .info .title a {
  font-family: 'Vremena Grotesk';
  font-size: 15px;
  display: block;
  overflow: hidden;
  max-height: 3.6em;
  line-height: 1.2;
  text-decoration: none;
  text-transform: uppercase;
  color: #1e222f;
  margin-bottom: 0;
}
.uss_eshop_sameproducts.blocks .item .info .title a:hover {
  color: #a1536d;
}
.uss_eshop_sameproducts.blocks .item .info .price {
  -webkit-box-flex: 1;
      -ms-flex: 1 auto;
          flex: 1 auto;
  display: inline-block;
  margin: 0;
  vertical-align: bottom;
  padding-bottom: 3px;
}
.uss_eshop_sameproducts.blocks .item .info .price span {
  padding: 0 !important;
  background: none !important;
}
.uss_eshop_sameproducts.blocks .item .info .price span.old_price {
  font-family: 'SegoeUI';
  font-size: 15px;
  display: block;
  color: #adb1b6;
}
.uss_eshop_sameproducts.blocks .item .info .price span.actual_price {
  font-weight: bold;
  font-family: 'SegoeUI';
  font-size: 23px;
  color: #a05e79;
}
.uss_eshop_sameproducts.blocks .item .info .addToCart {
  display: inline-block;
  vertical-align: bottom;
}
.uss_eshop_sameproducts.blocks .item .info .addToCart a.add_to_cart {
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 44px;
  height: 44px;
  text-indent: -9999px;
  background: url(../img/cart_icon.png) center no-repeat, #8f546c;
}
.uss_eshop_sameproducts.blocks .item .info .addToCart a.add_to_cart:hover {
  background-color: #222;
}
.uss_eshop_sameproducts.blocks .item .info .addToCart a.add_to_cart.already_in_cart {
  opacity: 0.8;
  background-color: #222222 !important;
}
.uss_eshop_sameproducts.blocks .item .info .buttons {
  margin-top: auto;
  margin-bottom: 0;
  padding: 0;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  margin-right: -10px !important;
}
.uss_eshop_sameproducts.blocks .item .imageWrap {
  margin-bottom: 18px;
  border: none;
}
.uss_eshop_sameproducts.blocks .item .imageWrap img {
  max-width: 100%;
}
.uss_eshop_sameproducts.blocks .item .eshop_filters_area .group {
  font-family: 'SegoeUI';
  margin-bottom: 10px;
}
.uss_eshop_sameproducts.blocks .item .eshop_filters_area .group .eshop_filters_group_title {
  font-size: 16px;
  font-weight: bold;
}
.uss_eshop_sameproducts.blocks .item .eshop_filters_area .eshop_filters_item .title {
  font-size: 15px;
  margin-right: 5px;
  font-weight: 500;
}
.uss_eshop_sameproducts.blocks .item .eshop_filters_area .eshop_filters_item .value {
  font-size: 15px;
  font-weight: 400;
}
.uss_eshop_sameproducts.blocks .item .eshop_filters_area .eshop_filters_line {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  row-gap: 2px;
}
.uss_eshop_sameproducts.blocks .item .eshop_filters_area .eshop_filters_line,
.uss_eshop_sameproducts.blocks .item .eshop_filters_area .value {
  max-width: 100%;
}
.uss_eshop_sameproducts.blocks .item.order_many {
  padding-bottom: 50px;
}
.uss_eshop_sameproducts.blocks .item.order_many .addToCart {
  position: relative;
}
.uss_eshop_sameproducts.blocks .item.order_many .addToCart .amount_title {
  font-family: 'SegoeUI';
  font-size: 15px;
  position: absolute;
  left: -148px;
  bottom: 38px;
  white-space: nowrap;
}
.uss_eshop_sameproducts.blocks .item.order_many .addToCart .basket_amount_class {
  font-family: 'SegoeUI';
  font-size: 15px;
  position: absolute;
  right: 70px;
  bottom: 30px;
  width: 32px;
  height: 32px;
  text-align: center;
  border: 2px solid #e5e5e5;
}
.uss_eshop_sameproducts.list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  row-gap: 21px;
}
.uss_eshop_sameproducts.list .item {
  width: 100%;
  margin-bottom: 0;
  border: 2px solid #e5e5e5;
}
.uss_eshop_sameproducts.list .item .imageArea {
  max-width: 30vw;
  margin-right: 15px !important;
}
.uss_eshop_sameproducts.list .item .imageArea .imageWrapOuter {
  max-width: 100%;
  height: auto !important;
}
.uss_eshop_sameproducts.list .item .imageArea .imageWrapOuter .image {
  max-width: 100%;
  height: auto !important;
}
.uss_eshop_sameproducts.list .item .info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
}
.uss_eshop_sameproducts.list .item .info .title {
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
  margin-bottom: 12px;
}
.uss_eshop_sameproducts.list .item .info .title a {
  color: #1e222f;
  text-decoration: none;
  text-transform: uppercase;
}
.uss_eshop_sameproducts.list .item .info .title:hover a {
  color: #a1536d;
}
.uss_eshop_sameproducts.list .item .info .price {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  margin-top: 7px;
}
.uss_eshop_sameproducts.list .item .info .price .old_price {
  font-weight: bold;
  font-family: 'SegoeUI';
  margin: 0;
  padding: 0;
  background: none !important;
  color: #b0b6bc;
  font-size: 16px;
}
.uss_eshop_sameproducts.list .item .info .price .actual_price {
  font-weight: bold;
  font-family: 'SegoeUI';
  margin: 0;
  padding: 0;
  background: none !important;
  color: #a05e79;
  font-size: 23px;
}
.uss_eshop_sameproducts.list .item .info .addToCart {
  margin-top: 7px;
}
.uss_eshop_sameproducts.list .item .info .addToCart a {
  position: relative;
  display: inline-block;
  vertical-align: bottom;
  background: url(../img/cart_icon.png) 13px center no-repeat, #8f546c;
  font-size: 15px;
  color: #fff;
  padding: 13px 10px 13px 47px;
  text-decoration: none;
  font-weight: bold;
  font-family: 'SegoeUI';
}
.uss_eshop_sameproducts.list .item .info .addToCart a:hover {
  opacity: 0.8;
  background-color: #222222 !important;
}
.uss_eshop_sameproducts.list .item .info .addToCart a.already_in_cart {
  opacity: 0.8;
  background-color: #222222 !important;
}
.uss_eshop_sameproducts.list .item .info .buttons {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
  -webkit-column-gap: 20px;
          column-gap: 20px;
  row-gap: 10px;
}
.uss_eshop_sameproducts.list .item .info .buttons .price {
  margin: 0;
}
.uss_eshop_sameproducts.list .item .info .buttons .addToCart {
  margin: 0;
}
.uss_eshop_sameproducts.list .item:hover {
  border-color: #97526B;
}
.slider_wrap {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 30px;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: stretch;
      -ms-flex-align: stretch;
          align-items: stretch;
}
.slider_wrap .uss_eshop_block_item {
  margin: 0;
}
.slider_wrap .uss_widget_outer_content {
  height: 100%;
}
.slider_wrap ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.slider_wrap ul li {
  position: relative;
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.slider_wrap .slide img {
  position: relative;
  max-width: 100%;
}
.slider_wrap .slider {
  overflow: hidden;
  width: 100%;
  position: relative;
}
.slider_wrap .slider .slides {
  width: 100%;
  white-space: nowrap;
}
.slider_wrap .slider .slides .slide {
  display: inline-block;
  white-space: normal;
}
.slider_wrap .slider .slides .slick-slide {
  position: relative;
  overflow: hidden;
}
.slider_wrap .slider .slides .image {
  min-height: 200px;
}
.slider_wrap .slider .slick-dots {
  bottom: 35px;
  padding-left: 38px;
  text-align: left;
}
.slider_wrap .slider .slick-dots li {
  width: 8px;
  height: 8px;
  margin-right: 12px;
}
.slider_wrap .slider .slick-dots li button {
  display: block;
  width: 8px;
  height: 8px;
  padding: 0;
  opacity: 1;
  border: 1px solid #fff;
  background: none;
}
.slider_wrap .slider .slick-dots li.slick-active button {
  background: #fff;
}
.slider_wrap .slider .slick-prev {
  z-index: 2;
  width: 66px;
  height: 66px;
  opacity: 1;
  background: url(../img/slider_next.png) center no-repeat;
  left: 0;
  background: url(../img/slider_prev.png) center no-repeat;
}
.slider_wrap .slider .slick-next {
  z-index: 2;
  width: 66px;
  height: 66px;
  opacity: 1;
  right: 0;
  background: url(../img/slider_next.png) center no-repeat;
}
.slider_wrap .slide_aside {
  min-width: 240px;
  width: 240px;
  -webkit-box-flex: 0;
      -ms-flex: 0 auto;
          flex: 0 auto;
}
.slider_wrap .slide_aside > * {
  margin-bottom: 0;
}
.slider_wrap .slider.pos-right ul.slides {
  right: 0;
  left: auto;
}
.slider_wrap .slider.pos-left ul.slides {
  right: auto;
  left: 0;
}
.slider_wrap .slider.pos-top ul.slides {
  top: 0;
  bottom: auto;
}
.slider_wrap .slider.pos-bottom ul.slides {
  top: auto;
  bottom: 0;
}
.slider_wrap .slide_form {
  min-height: 374px;
  padding: 10px;
  border: 2px solid #e5e5e5;
}
.slider_wrap .slide_form .jq-select-multiple {
  max-width: 100%;
}
.slider_wrap .slide_form .fc_upload_wrapper {
  max-width: 100%;
}
.slider_wrap .slide_form .fc_upload_wrapper .uss_editor_img_upload {
  max-width: 100%;
}
.slider_wrap .slide_form .fc_upload_wrapper .uss_editor_img_upload .jq-file {
  max-width: 100%;
}
.slider_wrap .slide_form .fc_captcha .captcha_item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.slider_wrap .slide_form .fc_captcha .captcha_item img {
  float: none;
  display: block;
}
.slider_wrap .slide_form .fc_captcha .captcha_item input.styler {
  width: calc(100% - 97px - 22px);
  height: 38px !important;
}
.slider_wrap .slide_form form {
  width: 100%;
}
.slider_wrap .slide_form form .group {
  width: 100%;
}
.slider_wrap .slide_form form .group .fc_item {
  width: 100%;
}
.slider_wrap .slide_form form .group .fc_item .elem_item {
  width: 100%;
}
.slider_wrap .slide_form form .group .fc_item .elem_item input.styler {
  width: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}
.slider_wrap .slide_form form .group .fc_item .elem_item input {
  width: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}
.slider_wrap .slide_form form .group .fc_item .elem_item textarea {
  width: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}
.slider_wrap .slide_form form .group .fc_item .elem_item textarea.styler {
  width: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}
.slider_wrap .slide_form form .buttons input {
  font-family: 'Vremena Grotesk';
  font-size: 15px;
  line-height: 1;
  display: inline-block;
  width: 100%;
  margin: 0 !important;
  margin-top: 20px;
  padding: 10px 12px 9px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #222222;
  border: 2px solid #a1536d;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  text-shadow: none;
}
.slider_wrap .slide_form form .buttons input:hover {
  background: #a1536d;
  color: #ffffff;
}
.slider_wrap .slide_form .h3 {
  font-size: 19px;
  line-height: 1.2;
  margin-bottom: 35px;
}
.catalog_block {
  margin-bottom: 10px;
}
.uss_section_content:after {
  content: '';
  display: table;
  clear: both;
}
.uss_eshop_item .posimg_item .uss_img_holder_outer {
  max-width: 100%;
  width: 100% !important;
}
.uss_section_content .uss_eshop_sameproducts .imageWrapOuter {
  max-width: 100%;
  width: 100% !important;
}
.uss_advanced_image_list .uss_adv_img_list_item:first-child {
  padding-left: 2px;
}
.uss_advanced_image_list .uss_adv_img_list_item:last-child {
  padding-right: 2px;
}
.uss_advanced_image_list .uss_adv_img_list_item span {
  background-color: #deccd3;
}
.uss_advanced_image_list .uss_adv_img_list_item.active span {
  background-color: #8f546c;
}
.table_block {
  display: block;
  width: 100%;
}
.table_block tbody {
  display: block;
  width: 100%;
}
.table_block tbody tr {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
}
.table_block tbody tr.left {
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
}
.table_block tbody tr.right {
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
}
.table_block tbody tr.center {
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}
.table_block > tbody > tr {
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
table.table_block table tr {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
table.table_block table tr td:first-child {
  padding-right: 15px;
}
table.table_block img {
  max-width: 100%;
}
.uss_last_guestbook_posts .uss_guestbook_item {
  border: 2px solid #e5e5e5;
  background: #fff;
  -webkit-box-shadow: none;
          box-shadow: none;
}
.uss_last_guestbook_posts .uss_guestbook_item:hover {
  border-color: #a1536d;
}
table.decore {
  border-collapse: collapse;
}
table.decore tbody {
  border: 2px solid #e5e5e5;
}
table.decore tbody tr th {
  font-size: 15px;
  font-weight: normal;
  padding: 10px 0 11px;
  text-align: center;
  text-transform: uppercase;
  border: 2px solid #e5e5e5;
  text-shadow: none;
}
table.decore tbody tr td {
  font-weight: bold;
  font-family: 'SegoeUI';
  font-size: 15px;
  padding: 10px 0 11px;
  text-align: center;
  border: 2px solid #e5e5e5;
  background: #fff;
}
table.decore tbody tr:nth-of-type(odd) td {
  background: #f4f5f6;
}
.colorStyle1.tml_mid .slider_wrap .slider {
  width: 100%;
  height: 289px;
}
.colorStyle1.tml_mid .slider_wrap .slider .slides {
  width: 100%;
  height: 100%;
}
.eshop_filters_group_title {
  font-weight: normal;
}
.catalog_orderform_tml .catalog_orderform_window_wrap {
  -webkit-box-sizing: content-box;
          box-sizing: content-box;
}
.catalog_orderform_tml .catalog_orderform_window_wrap .h3 {
  font-size: 25px;
  text-align: center;
  display: block;
  font-weight: normal;
  margin-bottom: 20px;
  font-family: 'Vremena Grotesk';
  color: #161c2c;
}
.uss_catlog_cat_anons {
  font-size: 15px;
  padding-left: 10px;
  padding-right: 10px;
}
.jq-radio {
  -webkit-box-sizing: content-box;
          box-sizing: content-box;
}
.fc_item.fc_checkbox {
  display: block;
  width: 100% !important;
}
.fc_item.fc_checkbox .elem_item {
  display: inline-block;
  width: auto !important;
  vertical-align: top;
}
.fc_item.fc_checkbox .sector_title {
  display: inline-block !important;
  width: auto !important;
  vertical-align: top;
  line-height: 1;
  width: calc(100% - 20px) !important;
}
.show_by_count {
  -webkit-box-sizing: content-box;
          box-sizing: content-box;
}
.show_by_count * {
  -webkit-box-sizing: content-box;
          box-sizing: content-box;
}
.uss_eshop_filters .uss_eshop_filters_block.simple_filters {
  float: none;
}
.uss_eshop_filters .uss_eshop_filters_block .jq-select-multiple {
  max-width: 100%;
}
em.price_zero_class {
  font-size: inherit;
}
table.table:not(.uss_eshop_sameproducts) {
  display: block;
  width: 100%;
}
table.table:not(.uss_eshop_sameproducts) tbody {
  display: block;
  width: 100%;
}
table.table:not(.uss_eshop_sameproducts) tr {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}
table.table:not(.uss_eshop_sameproducts) tr td {
  -webkit-box-flex: 1;
      -ms-flex: 1 auto;
          flex: 1 auto;
  min-width: calc(100% / 5);
  width: calc(100% / 5);
}
table.table:not(.uss_eshop_sameproducts) img {
  max-width: 100%;
}
.uss_shop_newbies_title {
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
}
.uss_pagenator {
  padding-top: 10px;
  font-size: 15px;
}
.uss_pagenator .uss_page_count {
  margin-bottom: 25px;
}
.uss_pagenator .uss_page_count .uss_page_num {
  margin-top: -15px;
}
.uss_pagenator .uss_page_num span[class^='uss_page'] {
  border: 1px solid #cccccc;
  min-width: 25px;
  min-height: 22px;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  padding: 2px 3px;
}
.uss_pagenator .uss_page_num span[class^='uss_page'] a {
  text-decoration: none;
  display: inline-block;
  width: 100%;
  height: 100%;
}
.uss_pagenator .uss_page_num .uss_page.uss_page_selected {
  border-color: #212121;
}
.uss_pagenator .uss_page_num .uss_page:hover {
  border-color: #212121;
}
.bread {
  margin-bottom: 20px;
  color: #bababa;
}
.uss_widget_outer_content {
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
.fc_form_tml .group .fc_item.block:not(.fc_checkbox) label {
  margin-bottom: 5px;
}
.fc_form_tml .group .fc_item.block:not(.fc_checkbox) .elem_item {
  width: 100%;
}
.fc_form_tml .group .fc_item.block:not(.fc_checkbox) .elem_item input.styler {
  width: 100%;
}
.fc_form_tml .group .fc_item.block:not(.fc_checkbox) .elem_item textarea.styler {
  width: 100%;
}
.slider {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
.slider .slide {
  position: relative;
  font-family: "Vremena Grotesk";
}
.slider .slide .slide-link {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
}
.slider .slide .image {
  position: relative;
}
.slider .slide .image:after {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
}
.slider .slide .caption {
  position: absolute;
  padding: 20px;
  right: 20px;
  bottom: 20px;
  line-height: 1.2;
  text-align: right;
}
.slider .slide .caption p {
  margin: 0;
}
.slider .slide .caption p + p {
  margin-top: 0.4rem;
}
.slider .slide .caption .title {
  font-size: 28px;
}
.slider .slide .caption .title + .preview {
  margin-top: 15px;
}
.slider .slide .caption .preview {
  font-size: 16px;
}
.slider.bright .slide .image:after {
  background: rgba(255, 255, 255, 0.3);
}
.slider.bright .slide .caption {
  background: rgba(255, 255, 255, 0.75);
  color: #212121;
}
.slider.dark .slide .image:after {
  background: rgba(0, 0, 0, 0.3);
}
.slider.dark .slide .caption {
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
}
.comment_form_block .comment_form_title {
  font-family: 'Vremena Grotesk';
  font-size: 19px;
  font-weight: normal;
  margin-bottom: 18px;
  text-transform: uppercase;
}
.comment_form_block .uss_form_tml.comments_form form#ommentaddform_id {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}
.comment_form_block .uss_form_tml.comments_form form#ommentaddform_id label {
  font-size: 15px !important;
  font-family: inherit !important;
}
.comment_form_block .uss_form_tml.comments_form form#ommentaddform_id .uss_form_item.uss_form_text input[type='text'].styler {
  width: 100%;
}
.comment_form_block .uss_form_tml.comments_form form#ommentaddform_id .uss_form_item.uss_form_textarea {
  width: 100%;
}
.comment_form_block .uss_form_tml.comments_form form#ommentaddform_id .uss_form_item.uss_form_textarea textarea.styler {
  width: 100%;
}
.comment_form_block .uss_form_tml.comments_form form#ommentaddform_id .uss_form_item.uss_form_checkbox {
  -webkit-box-flex: 1;
      -ms-flex: 1 auto;
          flex: 1 auto;
}
.comment_form_block .uss_form_tml.comments_form form#ommentaddform_id .uss_form_item.uss_form_submit {
  -webkit-box-flex: 0;
      -ms-flex: 0 auto;
          flex: 0 auto;
}
.promo {
  margin-top: 10px;
  margin-bottom: 30px;
}
.promo table tr td {
  text-transform: uppercase;
  vertical-align: top;
}
.promo .row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  width: 100%;
}
.promo .icons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  row-gap: 20px;
  width: 100%;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}
.promo .row.x6 .icon {
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
  max-width: calc((100% - 50px) / 6);
}
.promo .row.x5 .icon {
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
  max-width: calc((100% - 40px) / 5);
}
.promo .row.x4 .icon {
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
  max-width: calc((100% - 30px) / 4);
}
.promo .row.x3 .icon {
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
  max-width: calc((100% - 20px) / 3);
}
.promo .row.x2 .icon {
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
  max-width: calc((100% - 10px) / 2);
}
.promo .row.x1 .icon {
  width: 100%;
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
}
.promo .icon {
  -webkit-box-flex: 1;
      -ms-flex: 1 auto;
          flex: 1 auto;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.promo .image {
  width: 75px;
  height: 75px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin: 0 0 14px 0;
}
.promo .text {
  font-size: 18px;
}
.big_block.review .review-items {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}
.big_block.review .review-items .review-item {
  -webkit-box-flex: 0;
      -ms-flex: 0 50%;
          flex: 0 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  margin-bottom: 60px;
  padding-right: 70px;
}
.big_block.review .review-items .review-item .image {
  margin: 0 0 0 0;
}
.big_block.review .review-items .review-item .image img {
  overflow: hidden;
  border-radius: 112px;
  display: block;
  margin: 0 auto;
}
.big_block.review .review-items .review-item .title {
  font-size: 20px;
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
}
.big_block.review .review-items .review-item .info {
  font-size: 16px;
  line-height: 1.3;
}
.big_block.review .review-items .review-item .info p {
  margin: 0;
}
.big_block.review .review-items .review-item .info p + p {
  margin-top: 10px;
}
.big_block.review .review-items .review-item .left {
  -webkit-box-flex: 0;
      -ms-flex: 0 auto;
          flex: 0 auto;
  min-width: 150px;
  max-width: 150px;
}
.big_block.review .review-items .review-item .right {
  -webkit-box-flex: 1;
      -ms-flex: 1 auto;
          flex: 1 auto;
}
.block.faq a.all {
  float: right;
  height: 36px;
  margin-bottom: -36px;
}
.block.faq .uss_widget_outer_content {
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}
.block.faq .uss_widget_outer_content .h3 {
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
}
.block.faq .uss_widget_outer_content .uss_faq_item {
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
}
.photoalbum {
  margin-top: 10px;
}
.photoalbum .photoalbum_menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.photoalbum .photoalbum_menu li {
  display: block;
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.photoalbum .photoalbum_menu li .photoalbum_menu_item .photoalbum_image {
  float: none;
  display: block;
  margin: 0 0 21px 0;
}
.photoalbum .photoalbum_menu li .photoalbum_menu_item > a {
  font-size: 15px;
  font-weight: bold;
  color: #222;
}
.inset {
  padding-left: 57px;
  padding-right: 57px;
}
.jq-select-multiple {
  max-width: 100%;
}
.fc_upload_wrapper {
  max-width: 100%;
}
.fc_item .uss_editor_img_upload {
  max-width: 100%;
}
.fc_item .uss_editor_img_upload .jq-file {
  max-width: 100%;
}
.top_bar div .footer {
  margin-bottom: 51px;
}
.uss_photoalbums_foto_box .uss_img_item {
  max-width: calc((100% - 10px) / 2);
}
.uss_photoalbums_foto_box .uss_img_item .uss_img_pre {
  max-width: 100%;
  height: auto !important;
  display: block;
}
.uss_photoalbums_foto_box .uss_img_item .uss_img_pre img {
  display: block;
  max-width: 100%;
  height: auto !important;
}
.map p {
  margin: 0;
}
.uss_img_holder_outer {
  max-width: 100%;
  margin: 0 auto !important;
}
.imageWrapOuter {
  max-width: 100%;
  margin: 0 auto !important;
}
#tab_comments .uss_comments .comment .title .date {
  font-size: 13px;
}
.block .h3 {
  font-size: 30px;
}
.h3.h_op {
  font-size: 30px;
}
h1 {
  font-size: 30px;
}
.colorStyle1 button.styler:hover {
  background: #a1536d;
  color: #ffffff;
}
.colorStyle1 input[type='submit'].styler:hover {
  background: #a1536d;
  color: #ffffff;
}
.colorStyle1 input[type='reset'].styler:hover {
  background: #a1536d;
  color: #ffffff;
}
.colorStyle1 input[type='button'].styler:hover {
  background: #a1536d;
  color: #ffffff;
}
.colorStyle1 .tml_mid .slider_wrap .slider {
  width: 100%;
}
.colorStyle1 .tml_mid .slider_wrap .slider .slides {
  width: 100%;
}
.colorStyle1 .tml_min .slider_wrap .slider {
  width: 100%;
}
.colorStyle1 .tml_min .slider_wrap .slider .slides {
  width: 100%;
}
.colorStyle1 .uss_eshop_filters_block form .filter_submit input:hover {
  color: #ffffff;
  background: #a1536d;
  border-color: #a1536d;
}
.colorStyle2 button.styler {
  color: #bd9f5d;
  border-color: #bd9f5d;
}
.colorStyle2 button.styler:hover {
  color: #ffffff;
  background: #bd9f5d;
}
.colorStyle2 input[type='submit'].styler {
  color: #bd9f5d;
  border-color: #bd9f5d;
}
.colorStyle2 input[type='submit'].styler:hover {
  color: #ffffff;
  background: #bd9f5d;
}
.colorStyle2 input[type='reset'].styler {
  color: #bd9f5d;
  border-color: #bd9f5d;
}
.colorStyle2 input[type='reset'].styler:hover {
  color: #ffffff;
  background: #bd9f5d;
}
.colorStyle2 input[type='button'].styler {
  color: #bd9f5d;
  border-color: #bd9f5d;
}
.colorStyle2 input[type='button'].styler:hover {
  color: #ffffff;
  background: #bd9f5d;
}
.colorStyle2 .uss_advanced_image_list .uss_adv_img_list_item span {
  background-color: #ebe2ce;
}
.colorStyle2 .uss_advanced_image_list .uss_adv_img_list_item.active span {
  background-color: #bd9f5d;
}
.colorStyle2 .border_block {
  border-color: #dbdfe7;
}
.colorStyle2 .border_block:hover {
  border-color: #bd9f5d;
}
.colorStyle2 a {
  color: #bd9f5d;
}
.colorStyle2 .btn {
  color: #222222;
  border-color: #bd9f5d;
}
.colorStyle2 .btn:hover {
  color: #ffffff;
  background: #bd9f5d;
}
.colorStyle2 .header .center .slogan {
  color: #bd9f5d;
}
.colorStyle2 .top_menu ul li a:hover {
  color: #bd9f5d;
  border-color: #bd9f5d !important;
}
.colorStyle2 .top_menu ul li a:hover a {
  color: #bd9f5d;
  border-color: #bd9f5d !important;
}
.colorStyle2 .top_menu ul li a.active {
  color: #bd9f5d;
  border-color: #bd9f5d !important;
}
.colorStyle2 .top_menu ul li a.active a {
  color: #bd9f5d;
  border-color: #bd9f5d !important;
}
.colorStyle2 .top_menu ul li:hover {
  color: #bd9f5d;
  border-color: #bd9f5d !important;
}
.colorStyle2 .top_menu ul li:hover a {
  color: #bd9f5d;
  border-color: #bd9f5d !important;
}
.colorStyle2 .top_menu ul li .submenu {
  border-color: #bd9f5d !important;
}
.colorStyle2 .top_menu ul li .submenu li a:hover {
  color: #bd9f5d;
}
.colorStyle2 .top_menu ul li .submenu li a.active {
  color: #bd9f5d;
}
.colorStyle2 .top_menu ul li.active {
  color: #bd9f5d;
  border-color: #bd9f5d !important;
}
.colorStyle2 .top_menu ul li.active a {
  color: #bd9f5d;
  border-color: #bd9f5d !important;
}
.colorStyle2 .top_menu .inner > ul > li > a:hover {
  color: #bd9f5d;
}
.colorStyle2 .top_menu .inner > ul > li > a.active {
  color: #bd9f5d;
  border-color: #ffffff !important;
}
.colorStyle2 .container .aside .block ul li a:hover {
  color: #bd9f5d;
}
.colorStyle2 .container .aside .block ul li a.active {
  color: #bd9f5d;
}
.colorStyle2 .container .aside .block .news_block_item .info .title {
  color: #bd9f5d;
}
.colorStyle2 .container .aside .block .news_block_item .info .title a {
  color: #bd9f5d;
}
.colorStyle2 .container .aside .block .h3 {
  font-size: 18px;
}
.colorStyle2 .container .aside .block h3 {
  font-size: 18px;
}
.colorStyle2 .container .aside .block form .buttons input {
  color: #222222;
  border-color: #bd9f5d;
}
.colorStyle2 .container .aside .block form .buttons input:hover {
  color: #ffffff;
  background: #bd9f5d;
}
.colorStyle2 .container .aside .block.type3 .wrap {
  border-color: #bd9f5d;
}
.colorStyle2 .container .aside .block.type3 > .fc_form_tml {
  border-color: #bd9f5d;
}
.colorStyle2 .container .aside .block.polling .submit #submitvote {
  border-color: #bd9f5d;
}
.colorStyle2 .container .form_inline form {
  border: 2px solid #e5e5e5;
}
.colorStyle2 .container .form_inline form .group .fc_item .elem_item input.styler {
  border-color: #e5e5e5;
}
.colorStyle2 .container .form_inline form .group .fc_item .elem_item textarea.styler {
  border-color: #e5e5e5;
}
.colorStyle2 .container .form_inline form .group .fc_item .elem_item input {
  border-color: #e5e5e5;
}
.colorStyle2 .container .form_inline form .group .fc_item .elem_item textarea {
  border-color: #e5e5e5;
}
.colorStyle2 .container .form_inline form .buttons input.styler {
  color: #222222;
  border-color: #bd9f5d;
}
.colorStyle2 .container .form_inline form .buttons input.styler:hover {
  color: #ffffff;
  background: #bd9f5d;
}
.colorStyle2 .container .form_inline form .buttons input {
  color: #222222;
  border-color: #bd9f5d;
}
.colorStyle2 .container .form_inline form .buttons input:hover {
  color: #ffffff;
  background: #bd9f5d;
}
.colorStyle2 .uss_eshop_block_item {
  border-color: #dbdfe7;
}
.colorStyle2 .uss_eshop_block_item:hover {
  border-color: #bd9f5d;
}
.colorStyle2 .uss_eshop_block_item .uss_shop_name a:hover {
  color: #bd9f5d;
}
.colorStyle2 .uss_eshop_block_item .uss_shop_name a.active {
  color: #bd9f5d;
}
.colorStyle2 .uss_eshop_block_item .uss_shop_price span.actual_price {
  color: #222222;
}
.colorStyle2 .uss_eshop_block_item a.add_to_cart {
  background-color: #bd9f5d;
}
.colorStyle2 .uss_shop_list_view_item {
  border-color: #dbdfe7;
}
.colorStyle2 .uss_shop_list_view_item:hover {
  border-color: #bd9f5d;
}
.colorStyle2 .uss_shop_list_view_item .uss_shop_name a:hover {
  color: #bd9f5d;
}
.colorStyle2 .uss_shop_list_view_item .uss_shop_name a.active {
  color: #bd9f5d;
}
.colorStyle2 .uss_shop_list_view_item .uss_shop_price span.actual_price {
  color: #222222;
}
.colorStyle2 .uss_shop_list_view_item a.add_to_cart {
  background-color: #bd9f5d;
}
.colorStyle2 .uss_eshop_filters_block form .filter_submit input {
  color: #a4acbf;
  border-color: #a4acbf;
}
.colorStyle2 .uss_eshop_filters_block form .filter_submit input:hover {
  color: #ffffff;
  background: #a4acbf;
}
.colorStyle2 .uss_eshop_filters_block form .filter_submit button {
  color: #bd9f5d;
  border-color: #bd9f5d;
}
.colorStyle2 .uss_eshop_filters_block form .filter_submit button:hover {
  color: #ffffff;
  background: #a4acbf;
  background: #bd9f5d;
}
.colorStyle2 .uss_shop_blocks_view .uss_eshop_item {
  border-color: #dbdfe7;
}
.colorStyle2 .uss_shop_blocks_view .uss_eshop_item:hover {
  border-color: #bd9f5d;
}
.colorStyle2 .uss_shop_blocks_view .uss_eshop_item .uss_shop_name a:hover {
  color: #bd9f5d;
}
.colorStyle2 .uss_shop_blocks_view .uss_eshop_item .uss_shop_name a.active {
  color: #bd9f5d;
}
.colorStyle2 .uss_shop_blocks_view .uss_eshop_item .uss_shop_price span.actual_price {
  color: #bd9f5d;
}
.colorStyle2 .uss_shop_blocks_view .uss_eshop_item .uss_shop_by a.add_to_cart {
  background-color: #bd9f5d;
}
.colorStyle2 .catalog_block .catalog_menu > li {
  border-color: #dbdfe7;
}
.colorStyle2 .catalog_block .catalog_menu > li:hover {
  border-color: #bd9f5d;
}
.colorStyle2 .catalog_block .catalog_menu > li .catalog_menu_item > a:hover {
  color: #bd9f5d;
}
.colorStyle2 .catalog_block .catalog_menu .catalog_menu_item > a:hover {
  color: #bd9f5d;
}
.colorStyle2 .catalog_block .catalog_menu .catalog_menu_item > a.active {
  color: #bd9f5d;
}
.colorStyle2 .catalog_block > ul.uss_eshop_menu > li > a:hover {
  color: #bd9f5d;
}
.colorStyle2 .catalog_block .uss_catalog_sidebar .uss_catalog_category .uss_catalog_cat_name a:hover {
  color: #bd9f5d;
}
.colorStyle2 .eshop_block .uss_eshop_menu > li {
  border-color: #dbdfe7;
}
.colorStyle2 .eshop_block .uss_eshop_menu > li:hover {
  border-color: #bd9f5d;
}
.colorStyle2 .eshop_block .uss_eshop_menu > li a:hover {
  color: #bd9f5d;
}
.colorStyle2 .eshop_block .uss_eshop_menu > li a.active {
  color: #bd9f5d;
}
.colorStyle2 .uss_catalog_block_cat .uss_catalog_category {
  border-color: #dbdfe7;
}
.colorStyle2 .uss_catalog_block_cat .uss_catalog_category:hover {
  border-color: #bd9f5d;
}
.colorStyle2 .uss_catalog_block_cat .uss_catalog_category .catalog_info {
  margin-left: -2px;
}
.colorStyle2 .uss_catalog_block_cat .uss_catalog_category .catalog_info .uss_catalog_cat_name a {
  font-family: 'Vremena Grotesk';
  color: #222222;
}
.colorStyle2 .uss_catalog_list_cat .uss_catalog_category {
  border-color: #dbdfe7;
}
.colorStyle2 .uss_catalog_list_cat .uss_catalog_category:hover {
  border-color: #bd9f5d;
}
.colorStyle2 .uss_catalog_list_cat .uss_catalog_category .catalog_info {
  margin-left: -2px;
}
.colorStyle2 .uss_catalog_list_cat .uss_catalog_category .catalog_info .uss_catalog_cat_name a {
  font-family: 'Vremena Grotesk';
  color: #222222;
}
.colorStyle2 .catalog_orderbutton {
  background: #bd9f5d;
}
.colorStyle2 .catalog_orderbutton:hover {
  background-color: #222222;
}
.colorStyle2 .block.photoalbum .uss_images_block .uss_one_image img {
  border-color: #dbdfe7;
}
.colorStyle2 .block.photoalbum .uss_images_block .uss_one_image img:hover {
  border-color: #bd9f5d;
}
.colorStyle2 .footer_menu ul li {
  border-color: #dbdfe7;
}
.colorStyle2 .footer_menu ul li:hover {
  color: #bd9f5d;
  border-color: #bd9f5d;
}
.colorStyle2 .footer_menu ul li a:hover {
  color: #bd9f5d;
  border-color: #bd9f5d;
}
.colorStyle2 .footer_menu ul li a.active {
  color: #bd9f5d;
  border-color: #bd9f5d;
}
.colorStyle2 .footer_menu ul li.active {
  color: #bd9f5d;
  border-color: #bd9f5d;
}
.colorStyle2 .footer .center a {
  color: #bd9f5d;
}
.colorStyle2 table.decore {
  border-color: #dbdfe7;
}
.colorStyle2 table.decore tbody tr td {
  border-color: #dbdfe7;
}
.colorStyle2 table.decore tbody tr th {
  border-color: #dbdfe7;
}
.colorStyle2 div.uss_tabs div.uss_tabs_navigation span {
  background: #222;
}
.colorStyle2 div.uss_tabs div.uss_tabs_navigation span.selected {
  background: #bd9f5d;
}
.colorStyle2 div.uss_tabs div.tab_items {
  border-color: #bd9f5d;
}
.colorStyle2 .section_eshop .uss_shop_detail .uss_img_wrapper .uss_img_big {
  border: 2px solid #a4acbf;
}
.colorStyle2 .section_eshop .uss_shop_detail .uss_img_wrapper .uss_img_big .uss_img_big_image .uss_eshop_icons {
  background: #bd9f5d;
}
.colorStyle2 .section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_price span.price {
  color: #bd9f5d;
}
.colorStyle2 .section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_price span.old_price {
  color: #a4acbf;
}
.colorStyle2 .section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_by a.add_to_cart {
  background-color: #bd9f5d;
}
.colorStyle2 .section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_by a.add_to_cart:hover {
  background-color: #222222;
}
.colorStyle2 .section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_by a.add_to_cart.already_in_cart {
  background-color: #bd9f5d;
}
.colorStyle2 .uss_eshop_sameproducts.blocks .item .info .title a:hover {
  color: #bd9f5d;
}
.colorStyle2 .uss_eshop_sameproducts.blocks .item .info .price span.old_price {
  color: #a4acbf;
}
.colorStyle2 .uss_eshop_sameproducts.blocks .item .info .price span.actual_price {
  color: #222222;
}
.colorStyle2 .uss_eshop_sameproducts.blocks .item .info .addToCart a.add_to_cart {
  background-color: #bd9f5d;
}
.colorStyle2 .uss_eshop_sameproducts.blocks .item .info .addToCart a.add_to_cart:hover {
  background-color: #222;
}
.colorStyle2 .uss_shop_category {
  border-color: #dbdfe7;
}
.colorStyle2 .uss_shop_category:hover {
  border-color: #bd9f5d;
}
.colorStyle2 .uss_shop_category .uss_shop_cat_name a:hover {
  color: #bd9f5d;
}
.colorStyle2 .uss_shop_category .uss_shop_cat_name a.active {
  color: #bd9f5d;
}
.colorStyle2 .uss_last_guestbook_posts .uss_guestbook_item {
  border-color: #dbdfe7;
}
.colorStyle2 .uss_last_guestbook_posts .uss_guestbook_item:hover {
  border-color: #bd9f5d;
}
.colorStyle2 .slider_wrap .slider {
  width: 100%;
}
.colorStyle2 .slider_wrap .slider .slides {
  width: 100%;
}
.colorStyle2 .slider_wrap .slide_aside .buttons input {
  border-color: #bd9f5d;
}
.colorStyle2 .slider_wrap .slide_aside .buttons input:hover {
  color: #ffffff;
  background: #bd9f5d;
}
.colorStyle2 .tml_mid .slider {
  height: 296px;
}
.colorStyle2 .menu.top_menu.opened {
  background-color: #bd9f5d;
}
.colorStyle2 .menu.top_menu.opened ul {
  background: none !important;
}
.colorStyle2 .uss_eshop_sameproducts.list .item .info .addToCart a {
  background-color: #bd9f5d;
}
.colorStyle2 .uss_eshop_sameproducts.list .item .info .price .actual_price {
  color: #222222;
}
.colorStyle2 .uss_eshop_filters_block form .filter_submit input:hover {
  color: #222222;
  border-color: #bd9f5d;
}
.colorStyle3 button.styler {
  color: #f00000;
  border-color: #f00000;
}
.colorStyle3 button.styler:hover {
  color: #ffffff;
  background: #f00000;
}
.colorStyle3 input[type='submit'].styler {
  color: #f00000;
  border-color: #f00000;
}
.colorStyle3 input[type='submit'].styler:hover {
  color: #ffffff;
  background: #f00000;
}
.colorStyle3 input[type='reset'].styler {
  color: #f00000;
  border-color: #f00000;
}
.colorStyle3 input[type='reset'].styler:hover {
  color: #ffffff;
  background: #f00000;
}
.colorStyle3 input[type='button'].styler {
  color: #f00000;
  border-color: #f00000;
}
.colorStyle3 input[type='button'].styler:hover {
  color: #ffffff;
  background: #f00000;
}
.colorStyle3 .uss_advanced_image_list .uss_adv_img_list_item span {
  background-color: #fbb3b3;
}
.colorStyle3 .uss_advanced_image_list .uss_adv_img_list_item.active span {
  background-color: #f00000;
}
.colorStyle3 .border_block {
  border-color: #dbdfe7;
}
.colorStyle3 .border_block:hover {
  border-color: #f00000;
}
.colorStyle3 a {
  color: #f00000;
}
.colorStyle3 .btn {
  color: #222222;
  border-color: #f00000;
}
.colorStyle3 .btn:hover {
  color: #ffffff;
  background: #f00000;
}
.colorStyle3 .header .center .slogan {
  color: #f00000;
}
.colorStyle3 .top_menu ul li a:hover {
  color: #f00000;
  border-color: #f00000 !important;
}
.colorStyle3 .top_menu ul li a:hover a {
  color: #f00000;
  border-color: #f00000 !important;
}
.colorStyle3 .top_menu ul li a.active {
  color: #f00000;
  border-color: #f00000 !important;
}
.colorStyle3 .top_menu ul li a.active a {
  color: #f00000;
  border-color: #f00000 !important;
}
.colorStyle3 .top_menu ul li:hover {
  color: #f00000;
  border-color: #f00000 !important;
}
.colorStyle3 .top_menu ul li:hover a {
  color: #f00000;
  border-color: #f00000 !important;
}
.colorStyle3 .top_menu ul li .submenu {
  border-color: #f00000 !important;
}
.colorStyle3 .top_menu ul li .submenu li a:hover {
  color: #f00000;
}
.colorStyle3 .top_menu ul li .submenu li a.active {
  color: #f00000;
}
.colorStyle3 .top_menu ul li.active {
  color: #f00000;
  border-color: #f00000 !important;
}
.colorStyle3 .top_menu ul li.active a {
  color: #f00000;
  border-color: #f00000 !important;
}
.colorStyle3 .top_menu .inner > ul > li > a:hover {
  color: #f00000;
}
.colorStyle3 .top_menu .inner > ul > li > a.active {
  color: #f00000;
  border-color: #ffffff !important;
}
.colorStyle3 .container .aside .block ul li a:hover {
  color: #f00000;
}
.colorStyle3 .container .aside .block ul li a.active {
  color: #f00000;
}
.colorStyle3 .container .aside .block .news_block_item .info .title {
  color: #f00000;
}
.colorStyle3 .container .aside .block .news_block_item .info .title a {
  color: #f00000;
}
.colorStyle3 .container .aside .block .h3 {
  font-size: 18px;
}
.colorStyle3 .container .aside .block h3 {
  font-size: 18px;
}
.colorStyle3 .container .aside .block form .buttons input {
  color: #222222;
  border-color: #f00000;
}
.colorStyle3 .container .aside .block form .buttons input:hover {
  color: #ffffff;
  background: #f00000;
}
.colorStyle3 .container .aside .block.type3 .wrap {
  border-color: #f00000;
}
.colorStyle3 .container .aside .block.type3 > .fc_form_tml {
  border-color: #f00000;
}
.colorStyle3 .container .aside .block.polling .submit #submitvote {
  border-color: #f00000;
}
.colorStyle3 .form_inline form {
  border: 2px solid #e5e5e5;
}
.colorStyle3 .form_inline form .group .fc_item .elem_item input.styler {
  border-color: #e5e5e5;
}
.colorStyle3 .form_inline form .group .fc_item .elem_item textarea.styler {
  border-color: #e5e5e5;
}
.colorStyle3 .form_inline form .group .fc_item .elem_item input {
  border-color: #e5e5e5;
}
.colorStyle3 .form_inline form .group .fc_item .elem_item textarea {
  border-color: #e5e5e5;
}
.colorStyle3 .form_inline form .buttons input.styler {
  color: #222222;
  border-color: #f00000;
}
.colorStyle3 .form_inline form .buttons input.styler:hover {
  color: #ffffff;
  background: #f00000;
}
.colorStyle3 .form_inline form .buttons input {
  color: #222222;
  border-color: #f00000;
}
.colorStyle3 .form_inline form .buttons input:hover {
  color: #ffffff;
  background: #f00000;
}
.colorStyle3 .uss_shop_category {
  border-color: #dbdfe7;
}
.colorStyle3 .uss_shop_category:hover {
  border-color: #f00000;
}
.colorStyle3 .uss_shop_category .uss_shop_cat_name a:hover {
  color: #f00000;
}
.colorStyle3 .uss_shop_category .uss_shop_cat_name a.active {
  color: #f00000;
}
.colorStyle3 .uss_eshop_block_item {
  border-color: #dbdfe7;
}
.colorStyle3 .uss_eshop_block_item:hover {
  border-color: #f00000;
}
.colorStyle3 .uss_eshop_block_item .uss_shop_name a:hover {
  color: #f00000;
}
.colorStyle3 .uss_eshop_block_item .uss_shop_name a.active {
  color: #f00000;
}
.colorStyle3 .uss_eshop_block_item .uss_shop_price span.actual_price {
  color: #222222;
}
.colorStyle3 .uss_eshop_block_item a.add_to_cart {
  background-color: #f00000;
}
.colorStyle3 .uss_shop_list_view_item {
  border-color: #dbdfe7;
}
.colorStyle3 .uss_shop_list_view_item:hover {
  border-color: #f00000;
}
.colorStyle3 .uss_shop_list_view_item .uss_shop_name a:hover {
  color: #f00000;
}
.colorStyle3 .uss_shop_list_view_item .uss_shop_name a.active {
  color: #f00000;
}
.colorStyle3 .uss_shop_list_view_item .uss_shop_price span.actual_price {
  color: #222222;
}
.colorStyle3 .uss_shop_list_view_item a.add_to_cart {
  background-color: #f00000;
}
.colorStyle3 .uss_eshop_filters_block form .filter_submit input {
  color: #a4acbf;
  border-color: #a4acbf;
}
.colorStyle3 .uss_eshop_filters_block form .filter_submit input:hover {
  color: #ffffff;
  background: #a4acbf;
}
.colorStyle3 .uss_eshop_filters_block form .filter_submit button {
  color: #f00000;
  border-color: #f00000;
}
.colorStyle3 .uss_eshop_filters_block form .filter_submit button:hover {
  color: #ffffff;
  background: #a4acbf;
  background: #f00000;
}
.colorStyle3 .uss_shop_blocks_view .uss_eshop_item {
  border-color: #dbdfe7;
}
.colorStyle3 .uss_shop_blocks_view .uss_eshop_item:hover {
  border-color: #f00000;
}
.colorStyle3 .uss_shop_blocks_view .uss_eshop_item .uss_shop_name a:hover {
  color: #f00000;
}
.colorStyle3 .uss_shop_blocks_view .uss_eshop_item .uss_shop_name a.active {
  color: #f00000;
}
.colorStyle3 .uss_shop_blocks_view .uss_eshop_item .uss_shop_price span.actual_price {
  color: #f00000;
}
.colorStyle3 .uss_shop_blocks_view .uss_eshop_item .uss_shop_by a.add_to_cart {
  background-color: #f00000;
}
.colorStyle3 .catalog_block .catalog_menu > li {
  border-color: #dbdfe7;
}
.colorStyle3 .catalog_block .catalog_menu > li:hover {
  border-color: #f00000;
}
.colorStyle3 .catalog_block .catalog_menu > li .catalog_menu_item > a:hover {
  color: #f00000;
}
.colorStyle3 .catalog_block .catalog_menu .catalog_menu_item > a:hover {
  color: #f00000;
}
.colorStyle3 .catalog_block .catalog_menu .catalog_menu_item > a.active {
  color: #f00000;
}
.colorStyle3 .catalog_block > ul.uss_eshop_menu > li > a:hover {
  color: #f00000;
}
.colorStyle3 .catalog_block .uss_catalog_sidebar .uss_catalog_category .uss_catalog_cat_name a:hover {
  color: #f00000;
}
.colorStyle3 .eshop_block .uss_eshop_menu > li {
  border-color: #dbdfe7;
}
.colorStyle3 .eshop_block .uss_eshop_menu > li:hover {
  border-color: #f00000;
}
.colorStyle3 .eshop_block .uss_eshop_menu > li a:hover {
  color: #f00000;
}
.colorStyle3 .eshop_block .uss_eshop_menu > li a.active {
  color: #f00000;
}
.colorStyle3 .uss_catalog_block_cat .uss_catalog_category {
  border-color: #dbdfe7;
}
.colorStyle3 .uss_catalog_block_cat .uss_catalog_category:hover {
  border-color: #f00000;
}
.colorStyle3 .uss_catalog_block_cat .uss_catalog_category .catalog_info {
  margin-left: -2px;
}
.colorStyle3 .uss_catalog_block_cat .uss_catalog_category .catalog_info .uss_catalog_cat_name a {
  font-family: 'Vremena Grotesk';
  color: #222222;
}
.colorStyle3 .uss_catalog_list_cat .uss_catalog_category {
  border-color: #dbdfe7;
}
.colorStyle3 .uss_catalog_list_cat .uss_catalog_category:hover {
  border-color: #f00000;
}
.colorStyle3 .uss_catalog_list_cat .uss_catalog_category .catalog_info {
  margin-left: -2px;
}
.colorStyle3 .uss_catalog_list_cat .uss_catalog_category .catalog_info .uss_catalog_cat_name a {
  font-family: 'Vremena Grotesk';
  color: #222222;
}
.colorStyle3 .catalog_orderbutton {
  background: #f00000;
}
.colorStyle3 .catalog_orderbutton:hover {
  background-color: #222222;
}
.colorStyle3 .block.photoalbum .uss_images_block .uss_one_image img {
  border-color: #dbdfe7;
}
.colorStyle3 .block.photoalbum .uss_images_block .uss_one_image img:hover {
  border-color: #f00000;
}
.colorStyle3 .footer_menu ul li {
  border-color: #dbdfe7;
}
.colorStyle3 .footer_menu ul li:hover {
  color: #f00000;
  border-color: #f00000;
}
.colorStyle3 .footer_menu ul li a:hover {
  color: #f00000;
  border-color: #f00000;
}
.colorStyle3 .footer_menu ul li a.active {
  color: #f00000;
  border-color: #f00000;
}
.colorStyle3 .footer_menu ul li.active {
  color: #f00000;
  border-color: #f00000;
}
.colorStyle3 .footer .center a {
  color: #f00000;
}
.colorStyle3 table.decore {
  border-color: #dbdfe7;
}
.colorStyle3 table.decore tbody tr td {
  border-color: #dbdfe7;
}
.colorStyle3 table.decore tbody tr th {
  border-color: #dbdfe7;
}
.colorStyle3 div.uss_tabs div.uss_tabs_navigation span {
  background: #222;
}
.colorStyle3 div.uss_tabs div.uss_tabs_navigation span.selected {
  background: #f00000;
}
.colorStyle3 div.uss_tabs div.tab_items {
  border-color: #f00000;
}
.colorStyle3 .section_eshop .uss_shop_detail .uss_img_wrapper .uss_img_big {
  border: 2px solid #a4acbf;
}
.colorStyle3 .section_eshop .uss_shop_detail .uss_img_wrapper .uss_img_big .uss_img_big_image .uss_eshop_icons {
  background: #f00000;
}
.colorStyle3 .section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_price span.price {
  color: #f00000;
}
.colorStyle3 .section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_price span.old_price {
  color: #a4acbf;
}
.colorStyle3 .section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_by a.add_to_cart {
  background-color: #f00000;
}
.colorStyle3 .section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_by a.add_to_cart:hover {
  background-color: #222222;
}
.colorStyle3 .section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_by a.add_to_cart.already_in_cart {
  background-color: #f00000;
}
.colorStyle3 .uss_eshop_sameproducts.blocks .item .info .title a:hover {
  color: #f00000;
}
.colorStyle3 .uss_eshop_sameproducts.blocks .item .info .price span.old_price {
  color: #a4acbf;
}
.colorStyle3 .uss_eshop_sameproducts.blocks .item .info .price span.actual_price {
  color: #222222;
}
.colorStyle3 .uss_eshop_sameproducts.blocks .item .info .addToCart a.add_to_cart {
  background-color: #f00000;
}
.colorStyle3 .uss_eshop_sameproducts.blocks .item .info .addToCart a.add_to_cart:hover {
  background-color: #222;
}
.colorStyle3 .uss_last_guestbook_posts .uss_guestbook_item {
  border-color: #dbdfe7;
}
.colorStyle3 .uss_last_guestbook_posts .uss_guestbook_item:hover {
  border-color: #f00000;
}
.colorStyle3 .slider_wrap .slide_aside {
  min-width: 240px;
  width: 240px;
  min-height: auto;
}
.colorStyle3 .slider_wrap .slide_aside .buttons input {
  border-color: #f00000;
}
.colorStyle3 .slider_wrap .slide_aside .buttons input:hover {
  color: #ffffff;
  background: #f00000;
}
.colorStyle3 .menu.top_menu.opened {
  background-color: #f00000;
}
.colorStyle3 .menu.top_menu.opened ul {
  background: none !important;
}
.colorStyle3 .uss_eshop_sameproducts.list .item .info .addToCart a {
  background-color: #f00000;
}
.colorStyle3 .uss_eshop_sameproducts.list .item .info .price .actual_price {
  color: #222222;
}
.colorStyle3 .uss_eshop_filters_block form .filter_submit input:hover {
  color: #ffffff;
  background: #f00000;
}
.colorStyle4 button.styler {
  color: #87b005;
  border-color: #87b005;
}
.colorStyle4 button.styler:hover {
  color: #ffffff;
  background: #87b005;
}
.colorStyle4 input[type='submit'].styler {
  color: #87b005;
  border-color: #87b005;
}
.colorStyle4 input[type='submit'].styler:hover {
  color: #ffffff;
  background: #87b005;
}
.colorStyle4 input[type='reset'].styler {
  color: #87b005;
  border-color: #87b005;
}
.colorStyle4 input[type='reset'].styler:hover {
  color: #ffffff;
  background: #87b005;
}
.colorStyle4 input[type='button'].styler {
  color: #87b005;
  border-color: #87b005;
}
.colorStyle4 input[type='button'].styler:hover {
  color: #ffffff;
  background: #87b005;
}
.colorStyle4 .uss_advanced_image_list .uss_adv_img_list_item span {
  background-color: #dbe7b4;
}
.colorStyle4 .uss_advanced_image_list .uss_adv_img_list_item.active span {
  background-color: #87b005;
}
.colorStyle4 .border_block {
  border-color: #e8eae0;
}
.colorStyle4 .border_block:hover {
  border-color: #87b005;
}
.colorStyle4 a {
  color: #87b005;
}
.colorStyle4 .btn {
  color: #222222;
  border-color: #87b005;
}
.colorStyle4 .btn:hover {
  color: #ffffff;
  background: #87b005;
}
.colorStyle4 .header .center .slogan {
  color: #87b005;
}
.colorStyle4 .top_menu ul li a:hover {
  color: #87b005;
  border-color: #87b005 !important;
}
.colorStyle4 .top_menu ul li a:hover a {
  color: #87b005;
  border-color: #87b005 !important;
}
.colorStyle4 .top_menu ul li a.active {
  color: #87b005;
  border-color: #87b005 !important;
}
.colorStyle4 .top_menu ul li a.active a {
  color: #87b005;
  border-color: #87b005 !important;
}
.colorStyle4 .top_menu ul li:hover {
  color: #87b005;
  border-color: #87b005 !important;
}
.colorStyle4 .top_menu ul li:hover a {
  color: #87b005;
  border-color: #87b005 !important;
}
.colorStyle4 .top_menu ul li .submenu {
  border-color: #87b005 !important;
}
.colorStyle4 .top_menu ul li .submenu li a:hover {
  color: #87b005;
}
.colorStyle4 .top_menu ul li .submenu li a.active {
  color: #87b005;
}
.colorStyle4 .top_menu ul li.active {
  color: #87b005;
  border-color: #87b005 !important;
}
.colorStyle4 .top_menu ul li.active a {
  color: #87b005;
  border-color: #87b005 !important;
}
.colorStyle4 .top_menu .inner > ul > li > a:hover {
  color: #87b005;
}
.colorStyle4 .top_menu .inner > ul > li > a.active {
  color: #87b005;
  border-color: #ffffff !important;
}
.colorStyle4 .container .aside .block ul li a:hover {
  color: #87b005;
}
.colorStyle4 .container .aside .block ul li a.active {
  color: #87b005;
}
.colorStyle4 .container .aside .block .news_block_item .info .title {
  color: #87b005;
}
.colorStyle4 .container .aside .block .news_block_item .info .title a {
  color: #87b005;
}
.colorStyle4 .container .aside .block .h3 {
  font-size: 18px;
}
.colorStyle4 .container .aside .block h3 {
  font-size: 18px;
}
.colorStyle4 .container .aside .block.type3 .wrap {
  border-color: #87b005;
}
.colorStyle4 .container .aside .block.type3 > .fc_form_tml {
  border-color: #87b005;
}
.colorStyle4 .container .aside .block.polling .submit #submitvote {
  border-color: #87b005;
}
.colorStyle4 .container .aside form .buttons input {
  color: #222222;
  border-color: #87b005;
}
.colorStyle4 .container .aside form .buttons input:hover {
  color: #ffffff;
  background: #87b005;
}
.colorStyle4 .container .form_inline form {
  border: 2px solid #e5e5e5;
}
.colorStyle4 .container .form_inline form .group .fc_item .elem_item input.styler {
  border-color: #e5e5e5;
}
.colorStyle4 .container .form_inline form .group .fc_item .elem_item textarea.styler {
  border-color: #e5e5e5;
}
.colorStyle4 .container .form_inline form .group .fc_item .elem_item input {
  border-color: #e5e5e5;
}
.colorStyle4 .container .form_inline form .group .fc_item .elem_item textarea {
  border-color: #e5e5e5;
}
.colorStyle4 .container .form_inline form .buttons input.styler {
  color: #222222;
  border-color: #87b005;
}
.colorStyle4 .container .form_inline form .buttons input.styler:hover {
  color: #ffffff;
  background: #87b005;
}
.colorStyle4 .container .form_inline form .buttons input {
  color: #222222;
  border-color: #87b005;
}
.colorStyle4 .container .form_inline form .buttons input:hover {
  color: #ffffff;
  background: #87b005;
}
.colorStyle4 .uss_shop_category {
  border-color: #e8eae0;
}
.colorStyle4 .uss_shop_category:hover {
  border-color: #87b005;
}
.colorStyle4 .uss_shop_category .uss_shop_cat_name a:hover {
  color: #87b005;
}
.colorStyle4 .uss_shop_category .uss_shop_cat_name a.active {
  color: #87b005;
}
.colorStyle4 .uss_eshop_block_item {
  border-color: #e8eae0;
}
.colorStyle4 .uss_eshop_block_item:hover {
  border-color: #87b005;
}
.colorStyle4 .uss_eshop_block_item .uss_shop_name a:hover {
  color: #87b005;
}
.colorStyle4 .uss_eshop_block_item .uss_shop_name a.active {
  color: #87b005;
}
.colorStyle4 .uss_eshop_block_item .uss_shop_price span.actual_price {
  color: #222222;
}
.colorStyle4 .uss_eshop_block_item a.add_to_cart {
  background-color: #87b005;
}
.colorStyle4 .uss_shop_list_view_item {
  border-color: #e8eae0;
}
.colorStyle4 .uss_shop_list_view_item:hover {
  border-color: #87b005;
}
.colorStyle4 .uss_shop_list_view_item .uss_shop_name a:hover {
  color: #87b005;
}
.colorStyle4 .uss_shop_list_view_item .uss_shop_name a.active {
  color: #87b005;
}
.colorStyle4 .uss_shop_list_view_item .uss_shop_price span.actual_price {
  color: #222222;
}
.colorStyle4 .uss_shop_list_view_item a.add_to_cart {
  background-color: #87b005;
}
.colorStyle4 .uss_eshop_filters_block form .filter_submit input {
  color: #b0b6bc;
  border-color: #b0b6bc;
}
.colorStyle4 .uss_eshop_filters_block form .filter_submit input:hover {
  color: #ffffff;
  background: #b0b6bc;
}
.colorStyle4 .uss_eshop_filters_block form .filter_submit button {
  color: #87b005;
  border-color: #87b005;
}
.colorStyle4 .uss_eshop_filters_block form .filter_submit button:hover {
  color: #ffffff;
  background: #b0b6bc;
  background: #87b005;
}
.colorStyle4 .uss_shop_blocks_view .uss_eshop_item {
  border-color: #e8eae0;
}
.colorStyle4 .uss_shop_blocks_view .uss_eshop_item:hover {
  border-color: #87b005;
}
.colorStyle4 .uss_shop_blocks_view .uss_eshop_item .uss_shop_name a:hover {
  color: #87b005;
}
.colorStyle4 .uss_shop_blocks_view .uss_eshop_item .uss_shop_name a.active {
  color: #87b005;
}
.colorStyle4 .uss_shop_blocks_view .uss_eshop_item .uss_shop_price span.actual_price {
  color: #87b005;
}
.colorStyle4 .uss_shop_blocks_view .uss_eshop_item .uss_shop_by a.add_to_cart {
  background-color: #87b005;
}
.colorStyle4 .catalog_block .catalog_menu > li {
  border-color: #e8eae0;
}
.colorStyle4 .catalog_block .catalog_menu > li:hover {
  border-color: #87b005;
}
.colorStyle4 .catalog_block .catalog_menu > li .catalog_menu_item > a:hover {
  color: #87b005;
}
.colorStyle4 .catalog_block .catalog_menu .catalog_menu_item > a:hover {
  color: #87b005;
}
.colorStyle4 .catalog_block .catalog_menu .catalog_menu_item > a.active {
  color: #87b005;
}
.colorStyle4 .catalog_block > ul.uss_eshop_menu > li > a:hover {
  color: #87b005;
}
.colorStyle4 .catalog_block .uss_catalog_sidebar .uss_catalog_category .uss_catalog_cat_name a:hover {
  color: #87b005;
}
.colorStyle4 .eshop_block .uss_eshop_menu > li {
  border-color: #e8eae0;
}
.colorStyle4 .eshop_block .uss_eshop_menu > li:hover {
  border-color: #87b005;
}
.colorStyle4 .eshop_block .uss_eshop_menu > li a:hover {
  color: #87b005;
}
.colorStyle4 .eshop_block .uss_eshop_menu > li a.active {
  color: #87b005;
}
.colorStyle4 .uss_catalog_block_cat .uss_catalog_category {
  border-color: #e8eae0;
}
.colorStyle4 .uss_catalog_block_cat .uss_catalog_category:hover {
  border-color: #87b005;
}
.colorStyle4 .uss_catalog_block_cat .uss_catalog_category .catalog_info {
  margin-left: -2px;
}
.colorStyle4 .uss_catalog_block_cat .uss_catalog_category .catalog_info .uss_catalog_cat_name a {
  font-family: 'Vremena Grotesk';
  color: #222222;
}
.colorStyle4 .uss_catalog_list_cat .uss_catalog_category {
  border-color: #e8eae0;
}
.colorStyle4 .uss_catalog_list_cat .uss_catalog_category:hover {
  border-color: #87b005;
}
.colorStyle4 .uss_catalog_list_cat .uss_catalog_category .catalog_info {
  margin-left: -2px;
}
.colorStyle4 .uss_catalog_list_cat .uss_catalog_category .catalog_info .uss_catalog_cat_name a {
  font-family: 'Vremena Grotesk';
  color: #222222;
}
.colorStyle4 .catalog_orderbutton {
  background: #87b005;
}
.colorStyle4 .catalog_orderbutton:hover {
  background-color: #222222;
}
.colorStyle4 .block.photoalbum .uss_images_block .uss_one_image img {
  border-color: #e8eae0;
}
.colorStyle4 .block.photoalbum .uss_images_block .uss_one_image img:hover {
  border-color: #87b005;
}
.colorStyle4 .footer_menu ul li {
  border-color: #e8eae0;
}
.colorStyle4 .footer_menu ul li:hover {
  color: #87b005;
  border-color: #87b005;
}
.colorStyle4 .footer_menu ul li a:hover {
  color: #87b005;
  border-color: #87b005;
}
.colorStyle4 .footer_menu ul li a.active {
  color: #87b005;
  border-color: #87b005;
}
.colorStyle4 .footer_menu ul li.active {
  color: #87b005;
  border-color: #87b005;
}
.colorStyle4 .footer .center a {
  color: #87b005;
}
.colorStyle4 table.decore {
  border-color: #e8eae0;
}
.colorStyle4 table.decore tbody tr td {
  border-color: #e8eae0;
}
.colorStyle4 table.decore tbody tr th {
  border-color: #e8eae0;
}
.colorStyle4 div.uss_tabs div.uss_tabs_navigation span {
  background: #222;
}
.colorStyle4 div.uss_tabs div.uss_tabs_navigation span.selected {
  background: #87b005;
}
.colorStyle4 div.uss_tabs div.tab_items {
  border-color: #87b005;
}
.colorStyle4 .section_eshop .uss_shop_detail .uss_img_wrapper .uss_img_big {
  border: 2px solid #b0b6bc;
}
.colorStyle4 .section_eshop .uss_shop_detail .uss_img_wrapper .uss_img_big .uss_img_big_image .uss_eshop_icons {
  background: #87b005;
}
.colorStyle4 .section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_price span.price {
  color: #87b005;
}
.colorStyle4 .section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_price span.old_price {
  color: #b0b6bc;
}
.colorStyle4 .section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_by a.add_to_cart {
  background-color: #87b005;
}
.colorStyle4 .section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_by a.add_to_cart:hover {
  background-color: #222222;
}
.colorStyle4 .section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_by a.add_to_cart.already_in_cart {
  background-color: #87b005;
}
.colorStyle4 .uss_eshop_sameproducts.blocks .item .info .title a:hover {
  color: #87b005;
}
.colorStyle4 .uss_eshop_sameproducts.blocks .item .info .price span.old_price {
  color: #b0b6bc;
}
.colorStyle4 .uss_eshop_sameproducts.blocks .item .info .price span.actual_price {
  color: #222222;
}
.colorStyle4 .uss_eshop_sameproducts.blocks .item .info .addToCart a.add_to_cart {
  background-color: #87b005;
}
.colorStyle4 .uss_eshop_sameproducts.blocks .item .info .addToCart a.add_to_cart:hover {
  background-color: #222;
}
.colorStyle4 .uss_last_guestbook_posts .uss_guestbook_item {
  border-color: #e8eae0;
}
.colorStyle4 .uss_last_guestbook_posts .uss_guestbook_item:hover {
  border-color: #87b005;
}
.colorStyle4 .slider_wrap .slider {
  width: 100%;
}
.colorStyle4 .slider_wrap .slider .slides {
  width: 100%;
}
.colorStyle4 .slider_wrap .slide_aside .buttons input {
  border-color: #87b005;
}
.colorStyle4 .slider_wrap .slide_aside .buttons input:hover {
  color: #ffffff;
  background: #87b005;
}
.colorStyle4 .menu.top_menu.opened {
  background-color: #87b005;
}
.colorStyle4 .menu.top_menu.opened ul {
  background: none !important;
}
.colorStyle4 .uss_eshop_sameproducts.list .item .info .addToCart a {
  background-color: #87b005;
}
.colorStyle4 .uss_eshop_sameproducts.list .item .info .price .actual_price {
  color: #222222;
}
.colorStyle4 .uss_eshop_filters_block form .filter_submit input:hover {
  color: #ffffff;
  background: #87b005;
}
.colorStyle5 button.styler {
  color: #0c6cc5;
  border-color: #0c6cc5;
}
.colorStyle5 button.styler:hover {
  color: #ffffff;
  background: #0c6cc5;
}
.colorStyle5 input[type='submit'].styler {
  color: #0c6cc5;
  border-color: #0c6cc5;
}
.colorStyle5 input[type='submit'].styler:hover {
  color: #ffffff;
  background: #0c6cc5;
}
.colorStyle5 input[type='reset'].styler {
  color: #0c6cc5;
  border-color: #0c6cc5;
}
.colorStyle5 input[type='reset'].styler:hover {
  color: #ffffff;
  background: #0c6cc5;
}
.colorStyle5 input[type='button'].styler {
  color: #0c6cc5;
  border-color: #0c6cc5;
}
.colorStyle5 input[type='button'].styler:hover {
  color: #ffffff;
  background: #0c6cc5;
}
.colorStyle5 .uss_advanced_image_list .uss_adv_img_list_item span {
  background-color: #b6d3ee;
}
.colorStyle5 .uss_advanced_image_list .uss_adv_img_list_item.active span {
  background-color: #0c6cc5;
}
.colorStyle5 .border_block {
  border-color: #e2e8eb;
}
.colorStyle5 .border_block:hover {
  border-color: #0c6cc5;
}
.colorStyle5 a {
  color: #0c6cc5;
}
.colorStyle5 .btn {
  color: #222222;
  border-color: #0c6cc5;
}
.colorStyle5 .btn:hover {
  color: #ffffff;
  background: #0c6cc5;
}
.colorStyle5 .header .center .slogan {
  color: #0c6cc5;
}
.colorStyle5 .top_menu ul li a:hover {
  color: #a1c2d3;
  color: #0c6cc5;
  border-color: #0c6cc5 !important;
}
.colorStyle5 .top_menu ul li a:hover a {
  color: #0c6cc5;
  border-color: #0c6cc5 !important;
}
.colorStyle5 .top_menu ul li a.active {
  color: #a1c2d3;
  color: #0c6cc5;
  border-color: #0c6cc5 !important;
}
.colorStyle5 .top_menu ul li a.active a {
  color: #0c6cc5;
  border-color: #0c6cc5 !important;
}
.colorStyle5 .top_menu ul li:hover {
  color: #0c6cc5;
  border-color: #0c6cc5 !important;
}
.colorStyle5 .top_menu ul li:hover a {
  color: #0c6cc5;
  border-color: #0c6cc5 !important;
}
.colorStyle5 .top_menu ul li .submenu {
  border-color: #0c6cc5 !important;
}
.colorStyle5 .top_menu ul li .submenu li a:hover {
  color: #a1c2d3;
}
.colorStyle5 .top_menu ul li .submenu li a.active {
  color: #a1c2d3;
}
.colorStyle5 .top_menu ul li.active {
  color: #0c6cc5;
  border-color: #0c6cc5 !important;
}
.colorStyle5 .top_menu ul li.active a {
  color: #0c6cc5;
  border-color: #0c6cc5 !important;
}
.colorStyle5 .top_menu .inner > ul > li > a:hover {
  color: #0c6cc5;
}
.colorStyle5 .top_menu .inner > ul > li > a.active {
  color: #0c6cc5;
  border-color: #ffffff !important;
}
.colorStyle5 .container .aside .block ul li a:hover {
  color: #a1c2d3;
}
.colorStyle5 .container .aside .block ul li a.active {
  color: #a1c2d3;
}
.colorStyle5 .container .aside .block .news_block_item .info .title {
  color: #0c6cc5;
}
.colorStyle5 .container .aside .block .news_block_item .info .title a {
  color: #0c6cc5;
}
.colorStyle5 .container .aside .block .h3 {
  font-size: 18px;
}
.colorStyle5 .container .aside .block h3 {
  font-size: 18px;
}
.colorStyle5 .container .aside .block form .buttons input {
  color: #222222;
  border-color: #0c6cc5;
}
.colorStyle5 .container .aside .block form .buttons input:hover {
  color: #ffffff;
  background: #0c6cc5;
}
.colorStyle5 .container .aside .block.type3 .wrap {
  border-color: #0c6cc5;
}
.colorStyle5 .container .aside .block.type3 > .fc_form_tml {
  border-color: #0c6cc5;
}
.colorStyle5 .container .aside .block.polling .submit #submitvote {
  border-color: #0c6cc5;
}
.colorStyle5 .container .form_inline form {
  border: 2px solid #0c6cc5;
}
.colorStyle5 .container .form_inline form .group .fc_item .elem_item input.styler {
  border-color: #0c6cc5;
}
.colorStyle5 .container .form_inline form .group .fc_item .elem_item textarea.styler {
  border-color: #0c6cc5;
}
.colorStyle5 .container .form_inline form .group .fc_item .elem_item input {
  border-color: #0c6cc5;
}
.colorStyle5 .container .form_inline form .group .fc_item .elem_item textarea {
  border-color: #0c6cc5;
}
.colorStyle5 .container .form_inline form .buttons input.styler {
  color: #222222;
  border-color: #0c6cc5;
}
.colorStyle5 .container .form_inline form .buttons input.styler:hover {
  color: #ffffff;
  background: #0c6cc5;
}
.colorStyle5 .container .form_inline form .buttons input {
  color: #222222;
  border-color: #0c6cc5;
}
.colorStyle5 .container .form_inline form .buttons input:hover {
  color: #ffffff;
  background: #0c6cc5;
}
.colorStyle5 .container .block.type3 > div {
  border-color: #0c6cc5;
}
.colorStyle5 .container .block.type3 .wrap {
  border-color: #0c6cc5;
}
.colorStyle5 .container .block.type3 > .fc_form_tml {
  border-color: #0c6cc5;
}
.colorStyle5 .container .block.type3 form {
  border-color: #0c6cc5;
}
.colorStyle5 .container .block.type3 form .group .fc_item .elem_item input.styler {
  border-color: #0c6cc5;
}
.colorStyle5 .container .block.type3 form .group .fc_item .elem_item textarea.styler {
  border-color: #0c6cc5;
}
.colorStyle5 .uss_eshop_block_item {
  border-color: #e2e8eb;
}
.colorStyle5 .uss_eshop_block_item:hover {
  border-color: #0c6cc5;
}
.colorStyle5 .uss_eshop_block_item .uss_shop_name a:hover {
  color: #a1c2d3;
}
.colorStyle5 .uss_eshop_block_item .uss_shop_name a.active {
  color: #a1c2d3;
}
.colorStyle5 .uss_eshop_block_item .uss_shop_price span.actual_price {
  color: #2b1618;
}
.colorStyle5 .uss_eshop_block_item a.add_to_cart {
  background-color: #0c6cc5;
}
.colorStyle5 .uss_shop_list_view_item {
  border-color: #e2e8eb;
}
.colorStyle5 .uss_shop_list_view_item:hover {
  border-color: #0c6cc5;
}
.colorStyle5 .uss_shop_list_view_item .uss_shop_name a:hover {
  color: #a1c2d3;
}
.colorStyle5 .uss_shop_list_view_item .uss_shop_name a.active {
  color: #a1c2d3;
}
.colorStyle5 .uss_shop_list_view_item .uss_shop_price span.actual_price {
  color: #2b1618;
}
.colorStyle5 .uss_shop_list_view_item a.add_to_cart {
  background-color: #0c6cc5;
}
.colorStyle5 .uss_eshop_filters_block form .filter_submit input {
  color: #b0b6bc;
  border-color: #b0b6bc;
}
.colorStyle5 .uss_eshop_filters_block form .filter_submit input:hover {
  color: #ffffff;
  background: #b0b6bc;
}
.colorStyle5 .uss_eshop_filters_block form .filter_submit button {
  color: #0c6cc5;
  border-color: #0c6cc5;
}
.colorStyle5 .uss_eshop_filters_block form .filter_submit button:hover {
  color: #ffffff;
  background: #b0b6bc;
  background: #0c6cc5;
}
.colorStyle5 .uss_shop_blocks_view .uss_eshop_item {
  border-color: #e2e8eb;
}
.colorStyle5 .uss_shop_blocks_view .uss_eshop_item:hover {
  border-color: #0c6cc5;
}
.colorStyle5 .uss_shop_blocks_view .uss_eshop_item .uss_shop_name a:hover {
  color: #a1c2d3;
}
.colorStyle5 .uss_shop_blocks_view .uss_eshop_item .uss_shop_name a.active {
  color: #a1c2d3;
}
.colorStyle5 .uss_shop_blocks_view .uss_eshop_item .uss_shop_price span.actual_price {
  color: #0c6cc5;
}
.colorStyle5 .uss_shop_blocks_view .uss_eshop_item .uss_shop_by a.add_to_cart {
  background-color: #0c6cc5;
}
.colorStyle5 .uss_shop_category {
  border-color: #e2e8eb;
}
.colorStyle5 .uss_shop_category:hover {
  border-color: #0c6cc5;
}
.colorStyle5 .uss_shop_category .uss_shop_cat_name a:hover {
  color: #a1c2d3;
}
.colorStyle5 .uss_shop_category .uss_shop_cat_name a.active {
  color: #a1c2d3;
}
.colorStyle5 .catalog_block .catalog_menu > li {
  border-color: #e2e8eb;
}
.colorStyle5 .catalog_block .catalog_menu > li:hover {
  border-color: #0c6cc5;
}
.colorStyle5 .catalog_block .catalog_menu > li .catalog_menu_item > a:hover {
  color: #0c6cc5;
}
.colorStyle5 .catalog_block .catalog_menu .catalog_menu_item > a:hover {
  color: #a1c2d3;
}
.colorStyle5 .catalog_block .catalog_menu .catalog_menu_item > a.active {
  color: #a1c2d3;
}
.colorStyle5 .catalog_block > ul.uss_eshop_menu > li > a:hover {
  color: #0c6cc5;
}
.colorStyle5 .catalog_block .uss_catalog_sidebar .uss_catalog_category .uss_catalog_cat_name a:hover {
  color: #0c6cc5;
}
.colorStyle5 .eshop_block .uss_eshop_menu > li {
  border-color: #e2e8eb;
}
.colorStyle5 .eshop_block .uss_eshop_menu > li:hover {
  border-color: #0c6cc5;
}
.colorStyle5 .eshop_block .uss_eshop_menu > li a:hover {
  color: #a1c2d3;
}
.colorStyle5 .eshop_block .uss_eshop_menu > li a.active {
  color: #a1c2d3;
}
.colorStyle5 .uss_catalog_block_cat .uss_catalog_category {
  border-color: #e2e8eb;
}
.colorStyle5 .uss_catalog_block_cat .uss_catalog_category:hover {
  border-color: #0c6cc5;
}
.colorStyle5 .uss_catalog_block_cat .uss_catalog_category .catalog_info {
  margin-left: -2px;
}
.colorStyle5 .uss_catalog_block_cat .uss_catalog_category .catalog_info .uss_catalog_cat_name a {
  font-family: 'Vremena Grotesk';
  color: #222222;
}
.colorStyle5 .uss_catalog_list_cat .uss_catalog_category {
  border-color: #e2e8eb;
}
.colorStyle5 .uss_catalog_list_cat .uss_catalog_category:hover {
  border-color: #0c6cc5;
}
.colorStyle5 .uss_catalog_list_cat .uss_catalog_category .catalog_info {
  margin-left: -2px;
}
.colorStyle5 .uss_catalog_list_cat .uss_catalog_category .catalog_info .uss_catalog_cat_name a {
  font-family: 'Vremena Grotesk';
  color: #222222;
}
.colorStyle5 .catalog_orderbutton {
  background: #0c6cc5;
}
.colorStyle5 .catalog_orderbutton:hover {
  background-color: #222222;
}
.colorStyle5 .block.photoalbum .uss_images_block .uss_one_image img {
  border-color: #e2e8eb;
}
.colorStyle5 .block.photoalbum .uss_images_block .uss_one_image img:hover {
  border-color: #0c6cc5;
}
.colorStyle5 .footer_menu ul li {
  border-color: #e2e8eb;
}
.colorStyle5 .footer_menu ul li:hover {
  color: #0c6cc5;
  border-color: #0c6cc5;
}
.colorStyle5 .footer_menu ul li a:hover {
  color: #0c6cc5;
  border-color: #0c6cc5;
}
.colorStyle5 .footer_menu ul li a.active {
  color: #0c6cc5;
  border-color: #0c6cc5;
}
.colorStyle5 .footer_menu ul li.active {
  color: #0c6cc5;
  border-color: #0c6cc5;
}
.colorStyle5 .footer .center a {
  color: #0c6cc5;
}
.colorStyle5 table.decore {
  border-color: #e2e8eb;
}
.colorStyle5 table.decore tbody tr td {
  border-color: #e2e8eb;
}
.colorStyle5 table.decore tbody tr th {
  border-color: #e2e8eb;
}
.colorStyle5 div.uss_tabs div.uss_tabs_navigation span {
  background: #222;
}
.colorStyle5 div.uss_tabs div.uss_tabs_navigation span.selected {
  background: #0c6cc5;
}
.colorStyle5 div.uss_tabs div.tab_items {
  border-color: #0c6cc5;
}
.colorStyle5 .section_eshop .uss_shop_detail .uss_img_wrapper .uss_img_big {
  border: 2px solid #b0b6bc;
}
.colorStyle5 .section_eshop .uss_shop_detail .uss_img_wrapper .uss_img_big .uss_img_big_image .uss_eshop_icons {
  background: #0c6cc5;
}
.colorStyle5 .section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_price span.price {
  color: #0c6cc5;
}
.colorStyle5 .section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_price span.old_price {
  color: #b0b6bc;
}
.colorStyle5 .section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_by a.add_to_cart {
  background-color: #0c6cc5;
}
.colorStyle5 .section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_by a.add_to_cart:hover {
  background-color: #222222;
}
.colorStyle5 .section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_by a.add_to_cart.already_in_cart {
  background-color: #0c6cc5;
}
.colorStyle5 .uss_eshop_sameproducts.blocks .item .info .title a:hover {
  color: #0c6cc5;
}
.colorStyle5 .uss_eshop_sameproducts.blocks .item .info .price span.old_price {
  color: #b0b6bc;
}
.colorStyle5 .uss_eshop_sameproducts.blocks .item .info .price span.actual_price {
  color: #222222;
}
.colorStyle5 .uss_eshop_sameproducts.blocks .item .info .addToCart a.add_to_cart {
  background-color: #0c6cc5;
}
.colorStyle5 .uss_eshop_sameproducts.blocks .item .info .addToCart a.add_to_cart:hover {
  background-color: #222;
}
.colorStyle5 .uss_last_guestbook_posts .uss_guestbook_item {
  border-color: #e2e8eb;
}
.colorStyle5 .uss_last_guestbook_posts .uss_guestbook_item:hover {
  border-color: #0c6cc5;
}
.colorStyle5 .slider_wrap .slider {
  width: 100%;
}
.colorStyle5 .slider_wrap .slider .slides {
  width: 100%;
  height: 100%;
}
.colorStyle5 .slider_wrap .slide_aside .buttons input {
  border-color: #0c6cc5;
}
.colorStyle5 .slider_wrap .slide_aside .buttons input:hover {
  color: #ffffff;
  background: #0c6cc5;
}
.colorStyle5 .menu.top_menu.opened {
  background-color: #0c6cc5;
}
.colorStyle5 .menu.top_menu.opened ul {
  background: none !important;
}
.colorStyle5 .uss_eshop_sameproducts.list .item .info .addToCart a {
  background-color: #0c6cc5;
}
.colorStyle5 .uss_eshop_sameproducts.list .item .info .price .actual_price {
  color: #222222;
}
.colorStyle5 .uss_eshop_filters_block form .filter_submit input:hover {
  color: #ffffff;
  background: #0c6cc5;
}
.colorStyle6 button.styler {
  color: #8c8c8c;
  border-color: #8c8c8c;
}
.colorStyle6 button.styler:hover {
  color: #ffffff;
  background: #8c8c8c;
}
.colorStyle6 input[type='submit'].styler {
  color: #8c8c8c;
  border-color: #8c8c8c;
}
.colorStyle6 input[type='submit'].styler:hover {
  color: #ffffff;
  background: #8c8c8c;
}
.colorStyle6 input[type='reset'].styler {
  color: #8c8c8c;
  border-color: #8c8c8c;
}
.colorStyle6 input[type='reset'].styler:hover {
  color: #ffffff;
  background: #8c8c8c;
}
.colorStyle6 input[type='button'].styler {
  color: #8c8c8c;
  border-color: #8c8c8c;
}
.colorStyle6 input[type='button'].styler:hover {
  color: #ffffff;
  background: #8c8c8c;
}
.colorStyle6 .uss_advanced_image_list .uss_adv_img_list_item span {
  background-color: #dddddd;
}
.colorStyle6 .uss_advanced_image_list .uss_adv_img_list_item.active span {
  background-color: #8c8c8c;
}
.colorStyle6 .border_block {
  border-color: #e5e5e5;
}
.colorStyle6 .border_block:hover {
  border-color: #8c8c8c;
}
.colorStyle6 a {
  color: #8c8c8c;
}
.colorStyle6 .btn {
  color: #222222;
  border-color: #8c8c8c;
}
.colorStyle6 .btn:hover {
  color: #ffffff;
  background: #8c8c8c;
}
.colorStyle6 .header .center .slogan {
  color: #8c8c8c;
}
.colorStyle6 .h_nav_top .center {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 0 1%;
  text-transform: uppercase;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.colorStyle6 .top_menu ul li a:hover {
  color: #8c8c8c;
  border-color: #8c8c8c !important;
}
.colorStyle6 .top_menu ul li a:hover a {
  color: #8c8c8c;
  border-color: #8c8c8c !important;
}
.colorStyle6 .top_menu ul li a.active {
  color: #8c8c8c;
  border-color: #8c8c8c !important;
}
.colorStyle6 .top_menu ul li a.active a {
  color: #8c8c8c;
  border-color: #8c8c8c !important;
}
.colorStyle6 .top_menu ul li:hover {
  color: #8c8c8c;
  border-color: #8c8c8c !important;
}
.colorStyle6 .top_menu ul li:hover a {
  color: #8c8c8c;
  border-color: #8c8c8c !important;
}
.colorStyle6 .top_menu ul li .submenu {
  border-color: #8c8c8c !important;
}
.colorStyle6 .top_menu ul li .submenu li a:hover {
  color: #8c8c8c;
}
.colorStyle6 .top_menu ul li .submenu li a.active {
  color: #8c8c8c;
}
.colorStyle6 .top_menu ul li.active {
  color: #8c8c8c;
  border-color: #8c8c8c !important;
}
.colorStyle6 .top_menu ul li.active a {
  color: #8c8c8c;
  border-color: #8c8c8c !important;
}
.colorStyle6 .top_menu .inner > ul > li > a:hover {
  color: #8c8c8c;
}
.colorStyle6 .top_menu .inner > ul > li > a.active {
  color: #8c8c8c;
  border-color: #ffffff !important;
}
.colorStyle6 .container .aside .block ul li a:hover {
  color: #8c8c8c;
}
.colorStyle6 .container .aside .block ul li a.active {
  color: #8c8c8c;
}
.colorStyle6 .container .aside .block .news_block_item .info .title {
  color: #8c8c8c;
}
.colorStyle6 .container .aside .block .news_block_item .info .title a {
  color: #8c8c8c;
}
.colorStyle6 .container .aside .block .h3 {
  font-size: 18px;
}
.colorStyle6 .container .aside .block h3 {
  font-size: 18px;
}
.colorStyle6 .container .aside .block form .buttons input {
  color: #222222;
  border-color: #8c8c8c;
}
.colorStyle6 .container .aside .block form .buttons input:hover {
  color: #ffffff;
  background: #8c8c8c;
}
.colorStyle6 .container .aside .block.type3 {
  border-color: #8c8c8c;
}
.colorStyle6 .container .aside .block.polling .submit #submitvote {
  border-color: #8c8c8c;
}
.colorStyle6 .container .form_inline form {
  border: 2px solid #e5e5e5;
}
.colorStyle6 .container .form_inline form .group .fc_item .elem_item input.styler {
  border-color: #e5e5e5;
}
.colorStyle6 .container .form_inline form .group .fc_item .elem_item textarea.styler {
  border-color: #e5e5e5;
}
.colorStyle6 .container .form_inline form .group .fc_item .elem_item input {
  border-color: #e5e5e5;
}
.colorStyle6 .container .form_inline form .group .fc_item .elem_item textarea {
  border-color: #e5e5e5;
}
.colorStyle6 .container .form_inline form .buttons input.styler {
  color: #222222;
  border-color: #8c8c8c;
}
.colorStyle6 .container .form_inline form .buttons input.styler:hover {
  color: #ffffff;
  background: #8c8c8c;
}
.colorStyle6 .container .form_inline form .buttons input {
  color: #222222;
  border-color: #8c8c8c;
}
.colorStyle6 .container .form_inline form .buttons input:hover {
  color: #ffffff;
  background: #8c8c8c;
}
.colorStyle6 .uss_shop_category {
  border-color: #e5e5e5;
}
.colorStyle6 .uss_shop_category:hover {
  border-color: #8c8c8c;
}
.colorStyle6 .uss_shop_category .uss_shop_cat_name a:hover {
  color: #8c8c8c;
}
.colorStyle6 .uss_shop_category .uss_shop_cat_name a.active {
  color: #8c8c8c;
}
.colorStyle6 .uss_eshop_block_item {
  border-color: #e5e5e5;
}
.colorStyle6 .uss_eshop_block_item:hover {
  border-color: #8c8c8c;
}
.colorStyle6 .uss_eshop_block_item .uss_shop_name a:hover {
  color: #8c8c8c;
}
.colorStyle6 .uss_eshop_block_item .uss_shop_name a.active {
  color: #8c8c8c;
}
.colorStyle6 .uss_eshop_block_item .uss_shop_price span.actual_price {
  color: #1e222f;
}
.colorStyle6 .uss_eshop_block_item a.add_to_cart {
  background-color: #8c8c8c;
}
.colorStyle6 .uss_shop_list_view_item {
  border-color: #e5e5e5;
}
.colorStyle6 .uss_shop_list_view_item:hover {
  border-color: #8c8c8c;
}
.colorStyle6 .uss_shop_list_view_item .uss_shop_name a:hover {
  color: #8c8c8c;
}
.colorStyle6 .uss_shop_list_view_item .uss_shop_name a.active {
  color: #8c8c8c;
}
.colorStyle6 .uss_shop_list_view_item .uss_shop_price span.actual_price {
  color: #1e222f;
}
.colorStyle6 .uss_shop_list_view_item a.add_to_cart {
  background-color: #8c8c8c;
}
.colorStyle6 .uss_eshop_filters_block form .filter_submit input {
  color: #b0b6bc;
  border-color: #b0b6bc;
}
.colorStyle6 .uss_eshop_filters_block form .filter_submit input:hover {
  color: #ffffff;
  background: #b0b6bc;
}
.colorStyle6 .uss_eshop_filters_block form .filter_submit button {
  color: #8c8c8c;
  border-color: #8c8c8c;
}
.colorStyle6 .uss_eshop_filters_block form .filter_submit button:hover {
  color: #ffffff;
  background: #b0b6bc;
  background: #8c8c8c;
}
.colorStyle6 .uss_shop_blocks_view .uss_eshop_item {
  border-color: #e5e5e5;
}
.colorStyle6 .uss_shop_blocks_view .uss_eshop_item:hover {
  border-color: #8c8c8c;
}
.colorStyle6 .uss_shop_blocks_view .uss_eshop_item .uss_shop_name a:hover {
  color: #8c8c8c;
}
.colorStyle6 .uss_shop_blocks_view .uss_eshop_item .uss_shop_name a.active {
  color: #8c8c8c;
}
.colorStyle6 .uss_shop_blocks_view .uss_eshop_item .uss_shop_price span.actual_price {
  color: #8c8c8c;
}
.colorStyle6 .uss_shop_blocks_view .uss_eshop_item .uss_shop_by a.add_to_cart {
  background-color: #8c8c8c;
}
.colorStyle6 .catalog_block .catalog_menu > li {
  border-color: #e5e5e5;
}
.colorStyle6 .catalog_block .catalog_menu > li:hover {
  border-color: #8c8c8c;
}
.colorStyle6 .catalog_block .catalog_menu > li .catalog_menu_item > a:hover {
  color: #8c8c8c;
}
.colorStyle6 .catalog_block .catalog_menu .catalog_menu_item > a:hover {
  color: #8c8c8c;
}
.colorStyle6 .catalog_block .catalog_menu .catalog_menu_item > a.active {
  color: #8c8c8c;
}
.colorStyle6 .catalog_block > ul.uss_eshop_menu > li > a:hover {
  color: #8c8c8c;
}
.colorStyle6 .catalog_block .uss_catalog_sidebar .uss_catalog_category .uss_catalog_cat_name a:hover {
  color: #8c8c8c;
}
.colorStyle6 .eshop_block .uss_eshop_menu > li {
  border-color: #e5e5e5;
}
.colorStyle6 .eshop_block .uss_eshop_menu > li:hover {
  border-color: #8c8c8c;
}
.colorStyle6 .eshop_block .uss_eshop_menu > li a:hover {
  color: #8c8c8c;
}
.colorStyle6 .eshop_block .uss_eshop_menu > li a.active {
  color: #8c8c8c;
}
.colorStyle6 .uss_catalog_block_cat .uss_catalog_category {
  border-color: #e5e5e5;
}
.colorStyle6 .uss_catalog_block_cat .uss_catalog_category:hover {
  border-color: #8c8c8c;
}
.colorStyle6 .uss_catalog_block_cat .uss_catalog_category .catalog_info {
  margin-left: -2px;
}
.colorStyle6 .uss_catalog_block_cat .uss_catalog_category .catalog_info .uss_catalog_cat_name a {
  font-family: 'Vremena Grotesk';
  color: #222222;
}
.colorStyle6 .uss_catalog_list_cat .uss_catalog_category {
  border-color: #e5e5e5;
}
.colorStyle6 .uss_catalog_list_cat .uss_catalog_category:hover {
  border-color: #8c8c8c;
}
.colorStyle6 .uss_catalog_list_cat .uss_catalog_category .catalog_info {
  margin-left: -2px;
}
.colorStyle6 .uss_catalog_list_cat .uss_catalog_category .catalog_info .uss_catalog_cat_name a {
  font-family: 'Vremena Grotesk';
  color: #222222;
}
.colorStyle6 .catalog_orderbutton {
  background: #8c8c8c;
}
.colorStyle6 .catalog_orderbutton:hover {
  background-color: #222222;
}
.colorStyle6 .block.photoalbum .uss_images_block .uss_one_image img {
  border-color: #e5e5e5;
}
.colorStyle6 .block.photoalbum .uss_images_block .uss_one_image img:hover {
  border-color: #8c8c8c;
}
.colorStyle6 .footer_menu ul li {
  border-color: #e5e5e5;
}
.colorStyle6 .footer_menu ul li:hover {
  color: #8c8c8c;
  border-color: #8c8c8c;
}
.colorStyle6 .footer_menu ul li a:hover {
  color: #8c8c8c;
  border-color: #8c8c8c;
}
.colorStyle6 .footer_menu ul li a.active {
  color: #8c8c8c;
  border-color: #8c8c8c;
}
.colorStyle6 .footer_menu ul li.active {
  color: #8c8c8c;
  border-color: #8c8c8c;
}
.colorStyle6 .footer .center a {
  color: #8c8c8c;
}
.colorStyle6 table.decore {
  border-color: #e5e5e5;
}
.colorStyle6 table.decore tbody tr td {
  border-color: #e5e5e5;
}
.colorStyle6 table.decore tbody tr th {
  border-color: #e5e5e5;
}
.colorStyle6 div.uss_tabs div.uss_tabs_navigation span {
  background: #222;
}
.colorStyle6 div.uss_tabs div.uss_tabs_navigation span.selected {
  background: #8c8c8c;
}
.colorStyle6 div.uss_tabs div.tab_items {
  border-color: #8c8c8c;
}
.colorStyle6 .section_eshop .uss_shop_detail .uss_img_wrapper .uss_img_big {
  border: 2px solid #b0b6bc;
}
.colorStyle6 .section_eshop .uss_shop_detail .uss_img_wrapper .uss_img_big .uss_img_big_image .uss_eshop_icons {
  background: #8c8c8c;
}
.colorStyle6 .section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_price span.price {
  color: #8c8c8c;
}
.colorStyle6 .section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_price span.old_price {
  color: #b0b6bc;
}
.colorStyle6 .section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_by a.add_to_cart {
  background-color: #8c8c8c;
}
.colorStyle6 .section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_by a.add_to_cart:hover {
  background-color: #222222;
}
.colorStyle6 .section_eshop .uss_shop_detail .uss_shop_technical_data .uss_shop_by a.add_to_cart.already_in_cart {
  background-color: #8c8c8c;
}
.colorStyle6 .uss_eshop_sameproducts.blocks .item .info .title a:hover {
  color: #8c8c8c;
}
.colorStyle6 .uss_eshop_sameproducts.blocks .item .info .price span.old_price {
  color: #b0b6bc;
}
.colorStyle6 .uss_eshop_sameproducts.blocks .item .info .price span.actual_price {
  color: #222222;
}
.colorStyle6 .uss_eshop_sameproducts.blocks .item .info .addToCart a.add_to_cart {
  background-color: #8c8c8c;
}
.colorStyle6 .uss_eshop_sameproducts.blocks .item .info .addToCart a.add_to_cart:hover {
  background-color: #222;
}
.colorStyle6 .uss_last_guestbook_posts .uss_guestbook_item {
  border-color: #e5e5e5;
}
.colorStyle6 .uss_last_guestbook_posts .uss_guestbook_item:hover {
  border-color: #8c8c8c;
}
.colorStyle6 .slider_wrap .slider {
  width: 100%;
}
.colorStyle6 .slider_wrap .slider .slides {
  width: 100%;
  height: 100%;
}
.colorStyle6 .slider_wrap .slide_aside .buttons input {
  border-color: #8c8c8c;
}
.colorStyle6 .slider_wrap .slide_aside .buttons input:hover {
  color: #ffffff;
  background: #8c8c8c;
}
.colorStyle6 .menu.top_menu.opened {
  background-color: #8c8c8c;
}
.colorStyle6 .menu.top_menu.opened ul {
  background: none !important;
}
.colorStyle6 .uss_eshop_sameproducts.list .item .info .addToCart a {
  background-color: #8c8c8c;
}
.colorStyle6 .uss_eshop_sameproducts.list .item .info .price .actual_price {
  color: #222222;
}
.colorStyle6 .uss_eshop_filters_block form .filter_submit input:hover {
  color: #ffffff;
  background: #8c8c8c;
}
.news_list .date {
  color: #adb1b6;
}
.uss_search_form .uss_site_search {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  font-size: 15px;
}
.uss_search_form .uss_site_search .uss_input_name {
  -webkit-box-flex: 1;
      -ms-flex: 1 auto;
          flex: 1 auto;
  height: 32px;
  border-radius: 0;
  border: 1px solid #D0D5D9;
  font-weight: bold;
  font-family: 'SegoeUI';
  font-size: 15px;
  padding-left: 10px;
  padding-right: 10px;
  -webkit-box-shadow: none;
          box-shadow: none;
}
.uss_search_form .uss_site_search .uss_submit {
  height: 32px;
  padding-left: 5px;
  padding-right: 5px;
  margin-left: 10px;
  -webkit-box-flex: 0;
      -ms-flex: 0 auto;
          flex: 0 auto;
  min-width: none;
  width: auto;
  font-size: inherit;
  background: none;
  border: 2px solid #A1536D;
  border-radius: 0;
  color: #A1536D;
  text-align: center;
  font-family: "Vremena Grotesk";
  cursor: pointer;
}
.uss_search_form .uss_site_search .uss_submit:hover {
  background: #A1536D;
  color: #fff;
}
.uss_section_content .comment_form_block {
  margin: 0;
  padding: 0 0 10px 0;
}
.news_similar_title {
  font-family: 'Vremena Grotesk';
  font-size: 19px;
  font-weight: normal;
  margin-bottom: 18px;
  text-transform: uppercase;
}
.buy_one_click_form_tml .buy_one_click_window_wrap .buy_one_click_window .uss_buy_one_click_pos .uss_onepos_info .uss_shop_price_amount_wrap .uss_shop_price {
  display: block;
}
.buy_one_click_form_tml .buy_one_click_window_wrap .buy_one_click_window .uss_buy_one_click_pos .uss_onepos_info .uss_shop_price_amount_wrap .uss_shop_price span.old_price {
  font-family: 'SegoeUI';
  font-size: 15px;
  display: block;
  color: #adb1b6;
}
.buy_one_click_form_tml .buy_one_click_window_wrap .buy_one_click_window .uss_buy_one_click_pos .uss_onepos_info .uss_shop_price_amount_wrap .uss_shop_price div.actual_price {
  font-weight: bold;
  font-family: 'SegoeUI';
  font-size: 24px;
  color: #a05e79;
}
.jq-radio {
  -webkit-box-sizing: content-box;
          box-sizing: content-box;
}
.jq-radio.checked .jq-radio__div {
  -webkit-box-shadow: none;
          box-shadow: none;
  background: #a1536d;
}
.jq-checkbox.checked .jq-checkbox__div {
  -webkit-box-shadow: none;
          box-shadow: none;
  background: #a1536d;
}
form#ommentaddform_id {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}
form#ommentaddform_id > .uss_form_item {
  -webkit-box-flex: 1;
      -ms-flex: 1 auto;
          flex: 1 auto;
  margin-right: 0;
}
form#ommentaddform_id > .uss_form_item input:not([type='submit']) {
  width: 100%;
}
form#ommentaddform_id > .uss_form_item textarea {
  width: 100%;
}
form#ommentaddform_id > .uss_form_item + .uss_form_text {
  margin-left: 10px;
}
form#ommentaddform_id > .uss_form_item.uss_form_textarea {
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
}
form#ommentaddform_id > .uss_form_item.uss_form_checkbox {
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
  max-width: calc(100% - 125px);
}
form#ommentaddform_id > .uss_form_item.uss_form_submit {
  text-align: right;
}
.catalog_order_form .h3 {
  font-family: 'Vremena Grotesk';
  font-size: 19px;
  font-weight: normal;
  margin-bottom: 18px;
  text-transform: uppercase;
}
.uss_section_content .uss_comments {
  border: none;
  padding: 0;
  margin-top: 24px;
  margin-bottom: 34px;
}
.uss_section_content .uss_comments .uss_comments_title {
  padding-left: 0;
  font-family: 'Vremena Grotesk';
  font-size: 19px;
  font-weight: normal;
  margin-bottom: 18px;
  text-transform: uppercase;
  color: inherit;
}
.uss_section_content .uss_comments .comment_item.level_0 {
  padding-left: 0;
}
.uss_section_content .uss_comments .comment .title .date {
  font-size: 13px;
}
.uss_section_content .uss_comments .comment_item.level_0:last-child {
  margin-bottom: 0;
}
.section_registration .uss_section_content .uss_form_tml form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  width: 100%;
  max-width: 460px;
}
.section_registration .uss_section_content .uss_form_tml form > .uss_form_item.uss_form_text {
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
}
.section_registration .uss_section_content .uss_form_tml form > .uss_form_item.uss_form_text label {
  width: 100%;
}
.section_registration .uss_section_content .uss_form_tml form > .uss_form_item.uss_form_text input {
  width: 100%;
}
.section_registration .uss_section_content .uss_form_tml form > .uss_form_item.uss_form_text textarea {
  width: 100%;
}
.section_registration .uss_section_content .uss_form_tml form > .uss_form_item.uss_form_captcha {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  background: rgba(0, 0, 0, 0.1);
}
.section_registration .uss_section_content .uss_form_tml form > .uss_form_item.uss_form_captcha label {
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
}
.section_registration .uss_section_content .uss_form_tml form > .uss_form_item.uss_form_captcha img {
  -webkit-box-flex: 0;
      -ms-flex: 0 auto;
          flex: 0 auto;
}
.section_registration .uss_section_content .uss_form_tml form > .uss_form_item.uss_form_captcha input {
  -webkit-box-flex: 1;
      -ms-flex: 1 auto;
          flex: 1 auto;
  max-width: calc(100% - 122px - 15px);
  height: 52px;
  text-align: center;
  font-size: 22px;
}
.section_registration .uss_section_content .uss_form_tml form > .uss_form_item.uss_form_captcha input {
  background: #fff !important;
}
.section_registration .uss_section_content .uss_form_tml form > .uss_form_item.uss_form_submit {
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
}
form.uss_form_tml {
  max-width: 460px;
}
form.uss_form_tml > .uss_form_item.uss_form_text {
  width: 100%;
}
form.uss_form_tml > .uss_form_item.uss_form_text > input:not(.styler) {
  width: 100%;
  padding: 7px 9px;
  border: 1px solid #CCC;
  border-bottom-color: #B3B3B3;
  border-radius: 4px;
  -webkit-box-shadow: inset 1px 1px #f1f1f1, 0 1px 2px #000000;
          box-shadow: inset 1px 1px #f1f1f1, 0 1px 2px #000000;
  color: #333;
  font: 14px Arial, sans-serif;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  border-color: #B3B3B3;
}
form.uss_form_tml > .uss_form_item.uss_form_captcha {
  width: 100%;
}
form.uss_form_tml > .uss_form_item.uss_form_captcha label {
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
}
form.uss_form_tml > .uss_form_item.uss_form_captcha img {
  -webkit-box-flex: 0;
      -ms-flex: 0 auto;
          flex: 0 auto;
}
form.uss_form_tml > .uss_form_item.uss_form_captcha input {
  -webkit-box-flex: 1;
      -ms-flex: 1 auto;
          flex: 1 auto;
  max-width: calc(100% - 122px - 15px);
  height: 52px;
  text-align: center;
  font-size: 22px;
  border: none;
}
form.uss_form_tml > .uss_form_item.uss_form_captcha input {
  background: #fff !important;
}
form.uss_form_tml > .uss_form_item.uss_form_submit input[type='submit']:not(.styler) {
  cursor: pointer;
  font-size: 15px;
  line-height: 1;
  display: inline-block;
  margin: 0 !important;
  margin-top: 20px;
  padding: 10px 12px 9px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #a1536d;
  border: 2px solid #a1536d;
  border-radius: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  text-shadow: none;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.uss_votes h5 {
  font-size: 17px;
  margin-bottom: 14px;
}
.uss_votes .uss_votes_item {
  border-bottom-style: solid;
}
.section_formconstructor .fc_form_tml form .group .fc_item:not(.block),
.section_basket2 .fc_form_tml form .group .fc_item:not(.block) {
  width: 100%;
  max-width: 460px;
}
.section_formconstructor .fc_form_tml form .group .fc_item:not(.fc_checkbox) .elem_item,
.section_basket2 .fc_form_tml form .group .fc_item:not(.fc_checkbox) .elem_item {
  width: 100%;
}
.section_formconstructor .fc_form_tml form .group .fc_item .elem_item input,
.section_basket2 .fc_form_tml form .group .fc_item .elem_item input {
  width: 100%;
}
.section_formconstructor .fc_form_tml form .group .fc_item .elem_item textarea,
.section_basket2 .fc_form_tml form .group .fc_item .elem_item textarea {
  width: 100%;
}
.uss_user_basket .uss_name .uss_title {
  font-size: 16px;
}
.uss_user_basket .uss_name .uss_title ~ * {
  font-size: 14px;
}
.modal {
  background: rgba(0, 0, 0, 0.65);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  display: none;
}
.modal .modal-wrap {
  max-height: 100vh;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  z-index: 1001;
  padding: 25px;
  width: 420px;
  max-width: calc(100vw - 50px);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  border-radius: 5px;
  width: 358px;
}
.modal .modal-wrap .h3 {
  font-size: 25px;
  text-align: center;
  display: block;
  font-weight: normal;
  margin-bottom: 20px;
}
.modal .modal-wrap .group .fc_item {
  margin-bottom: 10px;
}
.modal .modal-wrap .group .fc_item:not(.block) {
  max-width: 460px;
  width: 100%;
}
.modal .modal-wrap .group .fc_item label.sector_title {
  margin-bottom: 2px;
}
.modal .modal-wrap .group .fc_item .elem_item {
  width: 100%;
}
.modal .modal-wrap .group .fc_item .elem_item input {
  width: 100%;
  height: 40px;
}
.modal .modal-wrap .group .fc_item .elem_item textarea {
  width: 100%;
  height: 93px;
}
.modal .modal-wrap .fc_form_tml {
  margin-bottom: 0;
  max-height: 100%;
  overflow: auto;
}
.modal .modal-wrap .fc_form_tml form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  row-gap: 20px;
}
.modal .modal-wrap .fc_form_tml *[type=hidden] {
  display: none;
}
.modal .modal-wrap .fc_form_tml .group {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
}
.modal .modal-wrap .fc_form_tml .group .fc_item {
  width: 100%;
  margin-bottom: 20px;
}
.modal .modal-wrap .fc_form_tml .group .fc_item.fc_checkbox {
  margin-bottom: 0;
}
.modal .modal-wrap .fc_form_tml .group .fc_item.fc_textarea {
  margin-bottom: 15px;
}
.modal .modal-wrap .fc_form_tml .group .fc_item:not(.fc_checkbox) .elem_item {
  width: 100%;
}
.modal .modal-wrap .fc_form_tml .group .fc_item textarea {
  resize: none;
}
.modal .modal-wrap .fc_form_tml .group .fc_item input {
  height: 32px;
}
.modal .modal-wrap .fc_form_tml .group .fc_checkbox .elem_item {
  width: auto;
}
.modal .modal-wrap .fc_form_tml .group .fc_checkbox a {
  color: #a1536d;
}
.modal .modal-wrap .fc_form_tml .buttons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: 100%;
}
.modal .modal-wrap .fc_form_tml .buttons input {
  width: 100%;
}
.modal .close {
  width: 26px;
  height: 26px;
  right: -37px;
  top: 15px;
  position: absolute;
  background: url(../img/uss_foto_buttons.png) no-repeat #ffffff;
  background-position: 0 -52px;
  z-index: 1001;
  cursor: pointer;
}
.modal .close:hover {
  background-color: #ccc;
}
.section_catalog .uss_catalog_detail .catalog_orderbutton {
  line-height: 1;
  display: block;
  padding: 10px 12px 9px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 0;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  cursor: pointer;
  color: #a1536d;
  border: 2px solid #a1536d;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  text-shadow: none;
}
.section_catalog .uss_catalog_detail .catalog_orderbutton:hover {
  background: #a1536d;
  color: #fff;
}
.block.faq .uss_faq {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  row-gap: 20px;
}
.block.faq .uss_faq .h3 {
  margin-bottom: 10px !important;
}
.block.faq .uss_faq_item {
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  max-width: calc((100% - 20px) / 2);
  margin-bottom: 0;
}
.block.faq .uss_faq_item .uss_faq_question .uss_faq_question_info {
  display: none;
}
.block.faq .uss_faq_item .uss_faq_question .uss_faq_question_text {
  font-size: 22px;
  margin: 0 0 14px 0;
  font-weight: bold;
  color: #3A3A3A;
}
.block.faq .uss_faq_item .uss_faq_question .uss_faq_question_text p {
  margin: 0;
}
.block.faq .uss_faq_item .uss_faq_reply p {
  margin: 0;
}
.block.faq .uss_faq_item .uss_faq_reply .uss_faq_reply_title {
  display: none !important;
}
.block.faq .uss_faq_item .uss_faq_reply .uss_faq_reply_text {
  margin: 0 0 14px 0;
  color: #505050;
}
.block.faq .uss_guestbook {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}
.block.faq .uss_guestbook .uss_guestbook_title {
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
}
.block.faq .uss_guestbook .uss_guestbook_item {
  max-width: calc((100% - 20px) / 2);
  margin-bottom: 20px;
  padding: 0;
  background: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}
.block.faq .uss_guestbook .uss_guestbook_item p {
  margin: 0;
}
.block.faq .uss_guestbook .uss_guestbook_item .uss_guestbook_question {
  margin: 0;
  padding: 0;
}
.block.faq .uss_guestbook .uss_guestbook_item .uss_guestbook_question .uss_guestbook_question_info {
  display: none !important;
}
.block.faq .uss_guestbook .uss_guestbook_item .uss_guestbook_question .uss_guestbook_question_text {
  font-size: 22px;
  margin: 0 0 14px 0;
  font-weight: bold;
  color: #3A3A3A;
}
.block.faq .uss_guestbook .uss_guestbook_item .uss_guestbook_reply {
  margin: 0;
  padding: 0;
  border: none;
}
.block.faq .uss_guestbook .uss_guestbook_item .uss_guestbook_reply .uss_guestbook_reply_title {
  display: none !important;
}
.block.faq .uss_guestbook .uss_guestbook_item .uss_guestbook_reply .uss_guestbook_reply_text {
  margin: 0 0 14px 0;
  color: #505050;
}
.position-slider .slick-track {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: stretch;
      -ms-flex-align: stretch;
          align-items: stretch;
}
.position-slider .slick-track .slick-slide {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  height: auto !important;
}
.position-slider .slick-track .slick-slide > div {
  -webkit-box-flex: 1;
      -ms-flex: 1 auto;
          flex: 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
.position-slider .slick-track .slick-slide > div > div {
  max-width: 100% !important;
  -webkit-box-flex: 1;
      -ms-flex: 1 auto;
          flex: 1 auto;
  margin-bottom: 0;
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
.position-slider .price_buy {
  margin-top: auto;
}
.position-slider .uss_eshop_block_item {
  width: 248px !important;
  min-width: 248px !important;
}
.position-slider .slick-prev {
  z-index: 2;
  width: 30px;
  height: 30px;
  opacity: 1;
  left: 0;
  background: url(../img/slider_prev_dark.png) center no-repeat;
  background-size: contain;
}
.position-slider .slick-next {
  z-index: 2;
  width: 30px;
  height: 30px;
  opacity: 1;
  right: 0;
  background: url(../img/slider_next_dark.png) center no-repeat;
}
.position-slider .uss_widget_outer_content {
  display: block !important;
}
.position-slider .uss_widget_outer_content .mCSB_container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-column-gap: 20px;
          column-gap: 20px;
}
.uss_shop_table_view td.uss_title {
  min-width: 200px;
}
.uss_shop_table_view td.uss_price span {
  background: none !important;
  margin: 0 0 7px 0 !important;
  padding: 0 !important;
  display: block;
}
.uss_shop_table_view td.uss_price span.old_price {
  color: #adb1b6 !important;
  font-size: 15px;
}
.uss_shop_table_view td.uss_price span.actual_price {
  color: #a05e79 !important;
  font-weight: bold;
  font-size: 16px;
  color: #a05e79;
}
.uss_shop_table_view td.uss_onlineorder span.add_to_cart {
  display: block;
  margin-bottom: 3px;
}
.uss_shop_table_view td.uss_onlineorder span.add_to_cart a {
  display: inline-block;
  background: #8f546c;
  color: #fff;
  padding: 5px 4px 5px 4px;
  text-decoration: none;
  font-weight: bold;
  font-family: 'SegoeUI';
}
.uss_shop_table_view td.uss_onlineorder div.uss_shop_by {
  margin-bottom: 3px;
}
.uss_shop_table_view td.uss_onlineorder div.uss_shop_by a {
  display: inline-block;
  background: #8f546c;
  color: #fff;
  padding: 5px 4px 5px 4px;
  text-decoration: none;
  font-weight: bold;
  font-family: 'SegoeUI';
}
.uss_shop_table_view td.uss_onlineorder div.uss_compare_by {
  margin-bottom: 3px;
}
.uss_shop_table_view td.uss_onlineorder div.uss_compare_by a {
  display: inline-block;
  background: #8f546c;
  color: #fff;
  padding: 5px 4px 5px 4px;
  text-decoration: none;
  font-weight: bold;
  font-family: 'SegoeUI';
}
.uss_shop_table_view td.uss_onlineorder span.add_to_wishlist {
  display: block;
  margin-bottom: 3px;
}
.uss_shop_table_view td.uss_onlineorder span.add_to_wishlist a {
  display: inline-block;
  background: #8f546c;
  color: #fff;
  padding: 5px 4px 5px 4px;
  text-decoration: none;
  font-weight: bold;
  font-family: 'SegoeUI';
}
table.uss_eshop_sameproducts td.title {
  min-width: 200px;
}
table.uss_eshop_sameproducts td.price span {
  background: none !important;
  margin: 0 0 7px 0 !important;
  padding: 0 !important;
  display: block;
}
table.uss_eshop_sameproducts td.price span.old_price {
  color: #adb1b6 !important;
  font-size: 15px;
}
table.uss_eshop_sameproducts td.price span.actual_price {
  color: #a05e79 !important;
  font-weight: bold;
  font-size: 16px;
  color: #a05e79;
}
table.uss_eshop_sameproducts td.addToCart a.add_to_cart {
  display: block;
  display: inline-block;
  background: #8f546c;
  color: #fff;
  padding: 5px 4px 5px 4px;
  text-decoration: none;
  font-weight: bold;
  font-family: 'SegoeUI';
}
table.uss_eshop_sameproducts td.addToCart a.add_to_cart.already_in_cart {
  opacity: 0.8;
  background-color: #222222 !important;
}
table.uss_eshop_sameproducts td.addToCart a.add_to_cart:hover {
  opacity: 0.8;
  background-color: #222222 !important;
}
table.uss_eshop_sameproducts td.addToCart div.shop_by {
  display: inline-block;
  background: #8f546c;
  color: #fff;
  padding: 5px 4px 5px 4px;
  text-decoration: none;
  font-weight: bold;
  font-family: 'SegoeUI';
}
table.uss_eshop_sameproducts td.addToCart div.shop_by.already_in_cart {
  opacity: 0.8;
  background-color: #222222 !important;
}
table.uss_eshop_sameproducts td.addToCart div.shop_by:hover {
  opacity: 0.8;
  background-color: #222222 !important;
}
table.uss_eshop_sameproducts td.addToCart div.compare_by {
  display: inline-block;
  background: #8f546c;
  color: #fff;
  padding: 5px 4px 5px 4px;
  text-decoration: none;
  font-weight: bold;
  font-family: 'SegoeUI';
}
table.uss_eshop_sameproducts td.addToCart div.compare_by.already_in_cart {
  opacity: 0.8;
  background-color: #222222 !important;
}
table.uss_eshop_sameproducts td.addToCart div.compare_by:hover {
  opacity: 0.8;
  background-color: #222222 !important;
}
table.uss_eshop_sameproducts td.addToCart a.add_to_wishlist {
  display: block;
  display: inline-block;
  background: #8f546c;
  color: #fff;
  padding: 5px 4px 5px 4px;
  text-decoration: none;
  font-weight: bold;
  font-family: 'SegoeUI';
}
table.uss_eshop_sameproducts td.addToCart a.add_to_wishlist.already_in_cart {
  opacity: 0.8;
  background-color: #222222 !important;
}
table.uss_eshop_sameproducts td.addToCart a.add_to_wishlist:hover {
  opacity: 0.8;
  background-color: #222222 !important;
}
.colorStyle2 .uss_search_form .uss_site_search .uss_submit {
  border-color: #bd9f5d;
  color: #bd9f5d;
}
.colorStyle2 .uss_search_form .uss_site_search .uss_submit:hover {
  background-color: #bd9f5d;
  color: #fff;
}
.colorStyle2 form.uss_form_tml > .uss_form_item.uss_form_submit input[type='submit']:not(.styler) {
  border-color: #bd9f5d;
  color: #bd9f5d;
}
.colorStyle2 form.uss_form_tml > .uss_form_item.uss_form_submit input[type='submit']:not(.styler):hover {
  background-color: #bd9f5d;
  color: #fff;
}
.colorStyle2 .catalog_block .uss_catalog_sidebar .uss_catalog_category .catalog_orderbutton,
.colorStyle2 .section_catalog .uss_catalog_detail .catalog_orderbutton {
  border-color: #bd9f5d;
  color: #bd9f5d;
}
.colorStyle2 .catalog_block .uss_catalog_sidebar .uss_catalog_category .catalog_orderbutton:hover,
.colorStyle2 .section_catalog .uss_catalog_detail .catalog_orderbutton:hover {
  background-color: #bd9f5d;
  color: #fff;
}
.colorStyle2 .catalog_block .catalog_menu > li:hover {
  border-color: #bd9f5d;
}
.colorStyle2 .catalog_block .uss_catalog_sidebar .uss_catalog_category:hover {
  border-color: #bd9f5d;
}
.colorStyle2 .catalog_block ul.uss_eshop_menu > li:hover {
  border-color: #bd9f5d;
}
.colorStyle2 .buy_one_click_form_tml .buy_one_click_window_wrap .buy_one_click_window .uss_buy_one_click_pos .uss_onepos_info .uss_shop_price_amount_wrap .uss_shop_price div.actual_price {
  color: #bd9f5d;
}
.colorStyle2 .jq-radio.checked .jq-radio__div {
  background: #bd9f5d;
}
.colorStyle2 .jq-checkbox.checked .jq-checkbox__div {
  background: #bd9f5d;
}
.colorStyle2 .aside .block.type4 {
  border-color: #bd9f5d;
}
.colorStyle2 .h_nav_top .cart #uss_block_basket_totals {
  background: #bd9f5d;
}
.colorStyle2 .uss_shop_table_view td.uss_price span.actual_price,
.colorStyle2 table.uss_eshop_sameproducts td.price span.actual_price {
  color: #bd9f5d !important;
}
.colorStyle2 .uss_shop_table_view td.uss_onlineorder span.add_to_cart a {
  background: #bd9f5d;
}
.colorStyle2 .uss_shop_table_view td.uss_onlineorder div.uss_shop_by a {
  background: #bd9f5d;
}
.colorStyle2 .uss_shop_table_view td.uss_onlineorder div.uss_compare_by a {
  background: #bd9f5d;
}
.colorStyle2 .uss_shop_table_view td.uss_onlineorder span.add_to_wishlist a {
  background: #bd9f5d;
}
.colorStyle2 table.uss_eshop_sameproducts td.addToCart a.add_to_cart {
  background: #bd9f5d;
}
.colorStyle2 table.uss_eshop_sameproducts td.addToCart div.uss_shop_by {
  background: #bd9f5d;
}
.colorStyle2 table.uss_eshop_sameproducts td.addToCart div.uss_compare_by {
  background: #bd9f5d;
}
.colorStyle2 table.uss_eshop_sameproducts td.addToCart a.add_to_wishlist {
  background: #bd9f5d;
}
.colorStyle2 .uss_eshop_sameproducts.list .item:hover {
  border-color: #bd9f5d;
}
.colorStyle2 .aside .block.polling .submit #submitvote:hover {
  background: #bd9f5d !important;
  border-color: #bd9f5d !important;
}
.colorStyle2 .modal .modal-wrap .fc_form_tml .group .fc_checkbox a {
  color: #bd9f5d;
}
.colorStyle2 .uss_eshop_sameproducts.list .item .info .title:hover a {
  color: #bd9f5d;
}
.colorStyle3 .uss_search_form .uss_site_search .uss_submit {
  border-color: #f00000;
  color: #f00000;
}
.colorStyle3 .uss_search_form .uss_site_search .uss_submit:hover {
  background-color: #f00000;
  color: #fff;
}
.colorStyle3 form.uss_form_tml > .uss_form_item.uss_form_submit input[type='submit']:not(.styler) {
  border-color: #f00000;
  color: #f00000;
}
.colorStyle3 form.uss_form_tml > .uss_form_item.uss_form_submit input[type='submit']:not(.styler):hover {
  background-color: #f00000;
  color: #fff;
}
.colorStyle3 .catalog_block .uss_catalog_sidebar .uss_catalog_category .catalog_orderbutton,
.colorStyle3 .section_catalog .uss_catalog_detail .catalog_orderbutton {
  border-color: #f00000;
  color: #f00000;
}
.colorStyle3 .catalog_block .uss_catalog_sidebar .uss_catalog_category .catalog_orderbutton:hover,
.colorStyle3 .section_catalog .uss_catalog_detail .catalog_orderbutton:hover {
  background-color: #f00000;
  color: #fff;
}
.colorStyle3 .catalog_block .catalog_menu > li:hover {
  border-color: #f00000;
}
.colorStyle3 .catalog_block .uss_catalog_sidebar .uss_catalog_category:hover {
  border-color: #f00000;
}
.colorStyle3 .catalog_block ul.uss_eshop_menu > li:hover {
  border-color: #f00000;
}
.colorStyle3 .buy_one_click_form_tml .buy_one_click_window_wrap .buy_one_click_window .uss_buy_one_click_pos .uss_onepos_info .uss_shop_price_amount_wrap .uss_shop_price div.actual_price {
  color: #f00000;
}
.colorStyle3 .jq-radio.checked .jq-radio__div {
  background: #f00000;
}
.colorStyle3 .jq-checkbox.checked .jq-checkbox__div {
  background: #f00000;
}
.colorStyle3 .aside .block.type4 {
  border-color: #f00000;
}
.colorStyle3 .h_nav_top .cart #uss_block_basket_totals {
  background: #f00000;
}
.colorStyle3 .uss_shop_table_view td.uss_price span.actual_price,
.colorStyle3 table.uss_eshop_sameproducts td.price span.actual_price {
  color: #f00000 !important;
}
.colorStyle3 .uss_shop_table_view td.uss_onlineorder span.add_to_cart a {
  background: #f00000;
}
.colorStyle3 .uss_shop_table_view td.uss_onlineorder div.uss_shop_by a {
  background: #f00000;
}
.colorStyle3 .uss_shop_table_view td.uss_onlineorder div.uss_compare_by a {
  background: #f00000;
}
.colorStyle3 .uss_shop_table_view td.uss_onlineorder span.add_to_wishlist a {
  background: #f00000;
}
.colorStyle3 table.uss_eshop_sameproducts td.addToCart a.add_to_cart {
  background: #f00000;
}
.colorStyle3 table.uss_eshop_sameproducts td.addToCart div.uss_shop_by {
  background: #f00000;
}
.colorStyle3 table.uss_eshop_sameproducts td.addToCart div.uss_compare_by {
  background: #f00000;
}
.colorStyle3 table.uss_eshop_sameproducts td.addToCart a.add_to_wishlist {
  background: #f00000;
}
.colorStyle3 .uss_eshop_sameproducts.list .item:hover {
  border-color: #f00000;
}
.colorStyle3 .aside .block.polling .submit #submitvote:hover {
  background: #f00000 !important;
  border-color: #f00000 !important;
}
.colorStyle3 .modal .modal-wrap .fc_form_tml .group .fc_checkbox a {
  color: #f00000;
}
.colorStyle3 .uss_eshop_sameproducts.list .item .info .title:hover a {
  color: #f00000;
}
.colorStyle4 .uss_search_form .uss_site_search .uss_submit {
  border-color: #87b005;
  color: #87b005;
}
.colorStyle4 .uss_search_form .uss_site_search .uss_submit:hover {
  background-color: #87b005;
  color: #fff;
}
.colorStyle4 form.uss_form_tml > .uss_form_item.uss_form_submit input[type='submit']:not(.styler) {
  border-color: #87b005;
  color: #87b005;
}
.colorStyle4 form.uss_form_tml > .uss_form_item.uss_form_submit input[type='submit']:not(.styler):hover {
  background-color: #87b005;
  color: #fff;
}
.colorStyle4 .catalog_block .uss_catalog_sidebar .uss_catalog_category .catalog_orderbutton,
.colorStyle4 .section_catalog .uss_catalog_detail .catalog_orderbutton {
  border-color: #87b005;
  color: #87b005;
}
.colorStyle4 .catalog_block .uss_catalog_sidebar .uss_catalog_category .catalog_orderbutton:hover,
.colorStyle4 .section_catalog .uss_catalog_detail .catalog_orderbutton:hover {
  background-color: #87b005;
  color: #fff;
}
.colorStyle4 .catalog_block .catalog_menu > li:hover {
  border-color: #87b005;
}
.colorStyle4 .catalog_block .uss_catalog_sidebar .uss_catalog_category:hover {
  border-color: #87b005;
}
.colorStyle4 .catalog_block ul.uss_eshop_menu > li:hover {
  border-color: #87b005;
}
.colorStyle4 .buy_one_click_form_tml .buy_one_click_window_wrap .buy_one_click_window .uss_buy_one_click_pos .uss_onepos_info .uss_shop_price_amount_wrap .uss_shop_price div.actual_price {
  color: #87b005;
}
.colorStyle4 .jq-radio.checked .jq-radio__div {
  background: #87b005;
}
.colorStyle4 .jq-checkbox.checked .jq-checkbox__div {
  background: #87b005;
}
.colorStyle4 .aside .block.type4 {
  border-color: #87b005;
}
.colorStyle4 .h_nav_top .cart #uss_block_basket_totals {
  background: #87b005;
}
.colorStyle4 .uss_shop_table_view td.uss_price span.actual_price,
.colorStyle4 table.uss_eshop_sameproducts td.price span.actual_price {
  color: #87b005 !important;
}
.colorStyle4 .uss_shop_table_view td.uss_onlineorder span.add_to_cart a {
  background: #87b005;
}
.colorStyle4 .uss_shop_table_view td.uss_onlineorder div.uss_shop_by a {
  background: #87b005;
}
.colorStyle4 .uss_shop_table_view td.uss_onlineorder div.uss_compare_by a {
  background: #87b005;
}
.colorStyle4 .uss_shop_table_view td.uss_onlineorder span.add_to_wishlist a {
  background: #87b005;
}
.colorStyle4 table.uss_eshop_sameproducts td.addToCart a.add_to_cart {
  background: #87b005;
}
.colorStyle4 table.uss_eshop_sameproducts td.addToCart div.uss_shop_by {
  background: #87b005;
}
.colorStyle4 table.uss_eshop_sameproducts td.addToCart div.uss_compare_by {
  background: #87b005;
}
.colorStyle4 table.uss_eshop_sameproducts td.addToCart a.add_to_wishlist {
  background: #87b005;
}
.colorStyle4 .uss_eshop_sameproducts.list .item:hover {
  border-color: #87b005;
}
.colorStyle4 .aside .block.polling .submit #submitvote:hover {
  background: #87b005 !important;
  border-color: #87b005 !important;
}
.colorStyle4 .modal .modal-wrap .fc_form_tml .group .fc_checkbox a {
  color: #87b005;
}
.colorStyle4 .uss_eshop_sameproducts.list .item .info .title:hover a {
  color: #87b005;
}
.colorStyle5 .uss_search_form .uss_site_search .uss_submit {
  border-color: #0c6cc5;
  color: #0c6cc5;
}
.colorStyle5 .uss_search_form .uss_site_search .uss_submit:hover {
  background-color: #0c6cc5;
  color: #fff;
}
.colorStyle5 form.uss_form_tml > .uss_form_item.uss_form_submit input[type='submit']:not(.styler) {
  border-color: #0c6cc5;
  color: #0c6cc5;
}
.colorStyle5 form.uss_form_tml > .uss_form_item.uss_form_submit input[type='submit']:not(.styler):hover {
  background-color: #0c6cc5;
  color: #fff;
}
.colorStyle5 .catalog_block .uss_catalog_sidebar .uss_catalog_category .catalog_orderbutton,
.colorStyle5 .section_catalog .uss_catalog_detail .catalog_orderbutton {
  border-color: #0c6cc5;
  color: #0c6cc5;
}
.colorStyle5 .catalog_block .uss_catalog_sidebar .uss_catalog_category .catalog_orderbutton:hover,
.colorStyle5 .section_catalog .uss_catalog_detail .catalog_orderbutton:hover {
  background-color: #0c6cc5;
  color: #fff;
}
.colorStyle5 .catalog_block .catalog_menu > li:hover {
  border-color: #0c6cc5;
}
.colorStyle5 .catalog_block .uss_catalog_sidebar .uss_catalog_category:hover {
  border-color: #0c6cc5;
}
.colorStyle5 .catalog_block ul.uss_eshop_menu > li:hover {
  border-color: #0c6cc5;
}
.colorStyle5 .buy_one_click_form_tml .buy_one_click_window_wrap .buy_one_click_window .uss_buy_one_click_pos .uss_onepos_info .uss_shop_price_amount_wrap .uss_shop_price div.actual_price {
  color: #0c6cc5;
}
.colorStyle5 .jq-radio.checked .jq-radio__div {
  background: #0c6cc5;
}
.colorStyle5 .jq-checkbox.checked .jq-checkbox__div {
  background: #0c6cc5;
}
.colorStyle5 .aside .block.type4 {
  border-color: #0c6cc5;
}
.colorStyle5 .h_nav_top .cart #uss_block_basket_totals {
  background: #0c6cc5;
}
.colorStyle5 .uss_shop_table_view td.uss_price span.actual_price,
.colorStyle5 table.uss_eshop_sameproducts td.price span.actual_price {
  color: #0c6cc5 !important;
}
.colorStyle5 .uss_shop_table_view td.uss_onlineorder span.add_to_cart a {
  background: #0c6cc5;
}
.colorStyle5 .uss_shop_table_view td.uss_onlineorder div.uss_shop_by a {
  background: #0c6cc5;
}
.colorStyle5 .uss_shop_table_view td.uss_onlineorder div.uss_compare_by a {
  background: #0c6cc5;
}
.colorStyle5 .uss_shop_table_view td.uss_onlineorder span.add_to_wishlist a {
  background: #0c6cc5;
}
.colorStyle5 table.uss_eshop_sameproducts td.addToCart a.add_to_cart {
  background: #0c6cc5;
}
.colorStyle5 table.uss_eshop_sameproducts td.addToCart div.uss_shop_by {
  background: #0c6cc5;
}
.colorStyle5 table.uss_eshop_sameproducts td.addToCart div.uss_compare_by {
  background: #0c6cc5;
}
.colorStyle5 table.uss_eshop_sameproducts td.addToCart a.add_to_wishlist {
  background: #0c6cc5;
}
.colorStyle5 .uss_eshop_sameproducts.list .item:hover {
  border-color: #0c6cc5;
}
.colorStyle5 .aside .block.polling .submit #submitvote:hover {
  background: #0c6cc5 !important;
  border-color: #0c6cc5 !important;
}
.colorStyle5 .modal .modal-wrap .fc_form_tml .group .fc_checkbox a {
  color: #0c6cc5;
}
.colorStyle5 .uss_eshop_sameproducts.list .item .info .title:hover a {
  color: #0c6cc5;
}
.colorStyle6 .uss_search_form .uss_site_search .uss_submit {
  border-color: #8c8c8c;
  color: #8c8c8c;
}
.colorStyle6 .uss_search_form .uss_site_search .uss_submit:hover {
  background-color: #8c8c8c;
  color: #fff;
}
.colorStyle6 form.uss_form_tml > .uss_form_item.uss_form_submit input[type='submit']:not(.styler) {
  border-color: #8c8c8c;
  color: #8c8c8c;
}
.colorStyle6 form.uss_form_tml > .uss_form_item.uss_form_submit input[type='submit']:not(.styler):hover {
  background-color: #8c8c8c;
  color: #fff;
}
.colorStyle6 .catalog_block .uss_catalog_sidebar .uss_catalog_category .catalog_orderbutton,
.colorStyle6 .section_catalog .uss_catalog_detail .catalog_orderbutton {
  border-color: #8c8c8c;
  color: #8c8c8c;
}
.colorStyle6 .catalog_block .uss_catalog_sidebar .uss_catalog_category .catalog_orderbutton:hover,
.colorStyle6 .section_catalog .uss_catalog_detail .catalog_orderbutton:hover {
  background-color: #8c8c8c;
  color: #fff;
}
.colorStyle6 .catalog_block .catalog_menu > li:hover {
  border-color: #8c8c8c;
}
.colorStyle6 .catalog_block .uss_catalog_sidebar .uss_catalog_category:hover {
  border-color: #8c8c8c;
}
.colorStyle6 .catalog_block ul.uss_eshop_menu > li:hover {
  border-color: #8c8c8c;
}
.colorStyle6 .buy_one_click_form_tml .buy_one_click_window_wrap .buy_one_click_window .uss_buy_one_click_pos .uss_onepos_info .uss_shop_price_amount_wrap .uss_shop_price div.actual_price {
  color: #8c8c8c;
}
.colorStyle6 .jq-radio.checked .jq-radio__div {
  background: #8c8c8c;
}
.colorStyle6 .jq-checkbox.checked .jq-checkbox__div {
  background: #8c8c8c;
}
.colorStyle6 .aside .block.type4 {
  border-color: #8c8c8c;
}
.colorStyle6 .h_nav_top .cart #uss_block_basket_totals {
  background: #8c8c8c;
}
.colorStyle6 .uss_shop_table_view td.uss_price span.actual_price,
.colorStyle6 table.uss_eshop_sameproducts td.price span.actual_price {
  color: #8c8c8c !important;
}
.colorStyle6 .uss_shop_table_view td.uss_onlineorder span.add_to_cart a {
  background: #8c8c8c;
}
.colorStyle6 .uss_shop_table_view td.uss_onlineorder div.uss_shop_by a {
  background: #8c8c8c;
}
.colorStyle6 .uss_shop_table_view td.uss_onlineorder div.uss_compare_by a {
  background: #8c8c8c;
}
.colorStyle6 .uss_shop_table_view td.uss_onlineorder span.add_to_wishlist a {
  background: #8c8c8c;
}
.colorStyle6 table.uss_eshop_sameproducts td.addToCart a.add_to_cart {
  background: #8c8c8c;
}
.colorStyle6 table.uss_eshop_sameproducts td.addToCart div.uss_shop_by {
  background: #8c8c8c;
}
.colorStyle6 table.uss_eshop_sameproducts td.addToCart div.uss_compare_by {
  background: #8c8c8c;
}
.colorStyle6 table.uss_eshop_sameproducts td.addToCart a.add_to_wishlist {
  background: #8c8c8c;
}
.colorStyle6 .uss_eshop_sameproducts.list .item:hover {
  border-color: #8c8c8c;
}
.colorStyle6 .aside .block.polling .submit #submitvote:hover {
  background: #8c8c8c !important;
  border-color: #8c8c8c !important;
}
.colorStyle6 .modal .modal-wrap .fc_form_tml .group .fc_checkbox a {
  color: #8c8c8c;
}
.colorStyle6 .uss_eshop_sameproducts.list .item .info .title:hover a {
  color: #8c8c8c;
}
.colorStyle1 .slider_wrap .slider .slick-next,
.colorStyle3 .slider_wrap .slider .slick-next,
.colorStyle5 .slider_wrap .slider .slick-next {
  background-image: url(../img/slider_next_dark.png);
}
.colorStyle1 .slider_wrap .slider .slick-prev,
.colorStyle3 .slider_wrap .slider .slick-prev,
.colorStyle5 .slider_wrap .slider .slick-prev {
  background-image: url(../img/slider_prev_dark.png);
}
.uss_faq_item {
  background: rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: none;
          box-shadow: none;
}
.fc_checkbox_one .sector_title {
  color: #ccc;
  font-weight: normal;
}
.fc_checkbox_one .sector_title a {
  font-weight: inherit;
}
form .group.end .label_under_hint label a {
  color: inherit;
}
.buy_one_click_window .one_click_form_wrapper .group .fc_checkbox label a {
  color: inherit;
}
.uss-scroller .mCSB_container {
  padding-top: 45px;
}
.uss-scroller .mCSB_scrollTools {
  top: 15px;
  bottom: auto;
}
.tableScoller-wrap {
  display: block;
  -webkit-box-flex: 0;
      -ms-flex: 0 100%;
          flex: 0 100%;
  width: 100%;
  max-width: 100%;
  clear: both;
  float: none;
  zoom: 1;
}
.tableScoller-wrap:before,
.tableScoller-wrap:after {
  content: '';
  display: table;
}
.tableScoller-wrap:after {
  clear: both;
}
.uss_section_content .uss_basket_menu > a,
.uss_section_content .uss_basket_menu > span {
  display: inline-block;
}
@media (min-width: 769px) and (max-width: 1000px) {
  .uss_shop_table_view .uss_img .uss_img_holder_outer,
  .uss_shop_table_view .uss_img .uss_img_holder {
    max-width: 139px;
    height: auto !important;
  }
}
@media (max-width: 768px) {
  .uss_shop_table_view.mCustomScrollbar .mCSB_container {
    width: 100% !important;
  }
  table.uss_shoppos_table {
    display: block;
    border: none;
    max-width: 100%;
    width: 100%;
  }
  table.uss_shoppos_table tbody {
    display: block;
  }
  table.uss_shoppos_table tbody tr:first-child {
    display: none;
  }
  table.uss_shoppos_table tbody tr:first-child + td {
    border-top: 1px solid #989898;
  }
  table.uss_shoppos_table tbody tr.uss_eshop_item {
    width: 100%;
    display: block;
    padding-bottom: 7px;
    padding-top: 7px;
  }
  table.uss_shoppos_table tbody tr.uss_eshop_item + tr {
    padding-top: 7px;
    border-top: 1px solid #989898;
  }
  table.uss_shoppos_table tbody tr.uss_eshop_item td {
    font-size: 15px;
    border: none;
    padding: 0;
    display: block;
    overflow: hidden;
    width: auto !important;
    margin-bottom: 5px;
  }
  table.uss_shoppos_table tbody tr.uss_eshop_item td.uss_img {
    float: left;
    display: block;
    margin-right: 10px;
  }
  table.uss_shoppos_table tbody tr.uss_eshop_item td.uss_img ~ * {
    overflow: hidden;
  }
  table.uss_shoppos_table tbody tr.uss_eshop_item td.uss_title {
    display: block;
  }
  table.uss_shoppos_table tbody tr.uss_eshop_item td.uss_price {
    text-align: left;
  }
  table.uss_shoppos_table tbody tr.uss_eshop_item td.uss_price span.old_price {
    font-size: 16px;
  }
  table.uss_shoppos_table tbody tr.uss_eshop_item td.uss_price span.actual_price {
    font-size: 18px;
  }
  table.uss_shoppos_table tbody tr.uss_eshop_item td.uss_description > div {
    height: auto;
  }
  table.uss_shoppos_table tbody tr.uss_eshop_item td.uss_onlineorder {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: left;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
  table.uss_shoppos_table tbody tr.uss_eshop_item td.uss_onlineorder > * {
    margin: 10px 10px 0 0 !important;
    white-space: nowrap;
  }
  table.uss_shoppos_table tbody tr.uss_eshop_item td.uss_onlineorder a.add_to_cart {
    max-width: none;
    margin-bottom: 0 !important;
  }
  table.uss_shoppos_table tbody tr.uss_eshop_item td.uss_onlineorder span.add_to_cart + .uss_shop_by {
    margin-top: 0;
  }
}
@media (max-width: 500px) {
  table.uss_shoppos_table tbody tr.uss_eshop_item td {
    margin: 0 0 5px 0;
  }
  table.uss_shoppos_table tbody tr.uss_eshop_item td.uss_img {
    float: none;
    display: block;
    width: 100%;
    margin: 0 0 10px 0;
  }
  table.uss_shoppos_table tbody tr.uss_eshop_item td.uss_img > div {
    margin: 0 auto;
  }
  table.uss_shoppos_table tbody tr.uss_eshop_item td > div {
    margin: 0;
  }
}
.uss_photoalbums_albums_block .uss_albums_item {
  display: block;
  max-width: calc((100% - 10px) / 2);
}
.uss_photoalbums_albums_block .uss_albums_item .uss_albums_cover {
  display: block;
  max-width: 100%;
  height: auto !important;
}
.uss_photoalbums_albums_block .uss_albums_item .uss_albums_cover img {
  display: block;
  max-width: 100%;
}
.uss_photoalbums .uss_photoalbums_foto_box .uss_img_item .uss_img_pre {
  height: auto !important;
  max-width: 100%;
  display: block;
}
.uss_photoalbums .uss_photoalbums_foto_box .uss_img_item .uss_img_pre img {
  max-width: 100%;
}
.uss_shop_block_cat .uss_shop_category .uss_shop_cat_img_wrap .uss_shop_cat_img {
  max-width: 100%;
  display: block;
}
.uss_shop_block_cat .uss_shop_category .uss_shop_cat_img_wrap .uss_shop_cat_img a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 100%;
  height: 100%;
}
.uss_shop_block_cat .uss_shop_category .uss_shop_cat_img_wrap .uss_shop_cat_img img {
  display: block;
  max-width: 100%;
  height: auto;
}
.uss_section_content .uss_shop_list_cat .uss_shop_category .uss_shop_cat_img_wrap {
  max-width: 40vw;
}
.uss_section_content .uss_shop_list_cat .uss_shop_category .uss_shop_cat_img_wrap .uss_shop_cat_img {
  display: block;
  max-width: 100%;
}
.uss_section_content .uss_shop_list_cat .uss_shop_category .uss_shop_cat_img_wrap .uss_shop_cat_img a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 100%;
  height: 100%;
}
.uss_section_content .uss_shop_list_cat .uss_shop_category .uss_shop_cat_img_wrap .uss_shop_cat_img img {
  display: block;
  max-width: 100%;
}
.uss_section_content .uss_shop_list_view_item.uss_eshop_item .posimg_item .uss_img_holder_outer {
  max-width: 30vw;
}
.uss_section_content .uss_shop_list_view_item.uss_eshop_item .posimg_item .uss_img_holder_outer .uss_img_holder {
  display: block;
  max-width: 100%;
}
.uss_section_content .uss_shop_list_view_item.uss_eshop_item .posimg_item .uss_img_holder_outer .uss_img_holder a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 100%;
  height: 100%;
}
.uss_section_content .uss_shop_list_view_item.uss_eshop_item .posimg_item .uss_img_holder_outer .uss_img_holder img {
  display: block;
  max-width: 100%;
}
.uss_shop_blocks_view .uss_eshop_item .posimg_item .uss_img_holder_outer {
  max-width: 100%;
}
.uss_shop_blocks_view .uss_eshop_item .posimg_item .uss_img_holder_outer .uss_img_holder {
  max-width: 100%;
  display: block;
  margin-bottom: 0;
}
.uss_shop_blocks_view .uss_eshop_item .posimg_item .uss_img_holder_outer .uss_img_holder a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 100%;
  height: 100%;
}
.uss_shop_blocks_view .uss_eshop_item .posimg_item .uss_img_holder_outer .uss_img_holder img {
  display: block;
  max-width: 100%;
  height: auto !important;
}
.uss_section_content .uss_eshop_sameproducts.list .item .imageArea {
  max-width: calc(40vw - 10px);
}
.uss_section_content .uss_eshop_sameproducts.list .item .imageArea .imageWrapOuter {
  max-width: 100%;
}
.uss_section_content .uss_eshop_sameproducts.list .item .imageArea .imageWrapOuter .image {
  display: block;
  max-width: 100%;
}
.uss_section_content .uss_eshop_sameproducts.list .item .imageArea .imageWrapOuter .image a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 100%;
  height: 100%;
}
.uss_section_content .uss_eshop_sameproducts.list .item .imageArea .imageWrapOuter .image img {
  display: block;
  max-width: 100%;
}
.uss_eshop_sameproducts.blocks .item .imageArea .imageWrapOuter {
  max-width: 100%;
}
.uss_eshop_sameproducts.blocks .item .imageArea .imageWrapOuter .imageWrap {
  max-width: 100%;
  display: block;
}
.uss_eshop_sameproducts.blocks .item .imageArea .imageWrapOuter .imageWrap .image {
  max-width: 100%;
  display: block;
}
.uss_eshop_sameproducts.blocks .item .imageArea .imageWrapOuter .imageWrap .image a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 100%;
  height: 100%;
}
.uss_eshop_sameproducts.blocks .item .imageArea .imageWrapOuter .imageWrap img {
  max-width: 100%;
  display: block;
  height: auto;
}
.uss_catalog_block_cat .uss_catalog_category .uss_catalog_cat_img {
  max-width: 100%;
  display: block;
}
.uss_catalog_block_cat .uss_catalog_category .uss_catalog_cat_img a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 100%;
  height: 100%;
}
.uss_section_content .uss_catalog_list_cat .uss_catalog_category .uss_catalog_img_wrap {
  max-width: 40vw - 10;
}
.uss_section_content .uss_catalog_list_cat .uss_catalog_category .uss_catalog_img_wrap .uss_catalog_cat_img {
  max-width: 100%;
  display: block;
}
.uss_section_content .uss_catalog_list_cat .uss_catalog_category .uss_catalog_img_wrap .uss_catalog_cat_img a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 100%;
  height: 100%;
}
.news_list.news_block_items .news_item .image .uss_image_holder {
  max-width: calc(100% - 4px);
  height: auto !important;
  display: block;
  margin: 2px;
}
.news_list.news_block_items .news_item .image .uss_image_holder img {
  display: block;
  max-width: 100%;
}
.similar_items_block .news_item .image .uss_image_holder {
  max-width: 100%;
  display: block;
  height: auto !important;
}
.similar_items_block .news_item .image .uss_image_holder img {
  max-width: 100%;
  display: block;
  height: auto;
}
.similar_items_list .news_item .image {
  max-width: 40vw;
}
.similar_items_list .news_item .image .uss_image_holder {
  max-width: 100%;
  display: block;
  height: auto !important;
}
.similar_items_list .news_item .image .uss_image_holder img {
  max-width: 100%;
  display: block;
  height: auto;
}
.groups_list .group_item .info .image .uss_image_holder {
  max-width: 40vw;
  height: auto !important;
  display: block;
}
.groups_list .group_item .info .image .uss_image_holder img {
  display: block;
  max-width: 100%;
  height: auto;
}
.groups_block .group_item .info .image .uss_image_holder {
  max-width: 40vw;
  height: auto !important;
  display: block;
}
.groups_block .group_item .info .image .uss_image_holder img {
  display: block;
  max-width: 100%;
  height: auto;
}
.uss_eshop_sameproducts.blocks .item {
  max-width: calc((100% - 10px) / 2);
}
.news_list.news_block_items .news_item {
  max-width: calc((100% - 10px) / 2);
}
.uss_shop_blocks_view .uss_eshop_item {
  max-width: calc((100% - 10px) / 2);
}
.uss_catalog_block_cat .uss_catalog_category {
  max-width: calc((100% - 10px) / 2);
}
.uss_shop_block_cat .uss_shop_category {
  max-width: calc((100% - 10px) / 2);
}
.similar_items_block .news_item {
  max-width: calc((100% - 10px) / 2);
}
.uss_shop_blocks_view .uss_eshop_item .uss_shop_name,
div.uss_tabs .uss_tabs_navigation span,
.uss_shop_block_cat .uss_shop_cat_name,
.uss_catalog_list_cat .uss_catalog_cat_name,
.uss_catalog_block_cat .uss_catalog_cat_name,
.uss_photoalbums_albums_list .uss_albums_name,
.uss_photoalbums_albums_block .uss_albums_name,
.uss_photoalbums_albums_with_photo .uss_albums_name,
.photoalbum_menu .photoalbum_menu_item > a,
.service .uss_eshop_menu > li > a,
.service .catalog_menu .catalog_menu_item > a,
.services .uss_eshop_menu > li > a,
.services .catalog_menu .catalog_menu_item > a,
.uss_eshop_block_item .uss_shop_name,
.content_menu,
.uss_shop_list_cat .uss_shop_cat_name,
.uss_shop_list_view .uss_shop_technical_data .uss_shop_name,
.section_news .uss_news .groups_list .group_item .title,
.section_news .uss_news .groups_block .group_item .title,
.uss_eshop_sameproducts.blocks .item .title,
.similar_items_block .news_item .info .title,
.similar_items_list .news_item .title,
.uss_eshop_sameproducts.list .item .title,
.buy_one_click_form_tml .uss_title,
.catalogs .uss_eshop_menu > li > a,
.catalogs .catalog_menu > li > div > a,
.product_cat .uss_eshop_menu > li > a,
.product_cat .catalog_menu > li > div > a,
.catalog_block .uss_eshop_menu > li > a,
.catalog_block .catalog_menu > li > div > a,
.block .news_block_item .info .title,
.uss_widget_outer_content .news_block_item .title,
.news_list .title {
  font-size: 17px;
  font-weight: bold;
}
.uss_shop_blocks_view .uss_eshop_item .uss_shop_name a,
div.uss_tabs .uss_tabs_navigation span a,
.uss_shop_block_cat .uss_shop_cat_name a,
.uss_catalog_list_cat .uss_catalog_cat_name a,
.uss_catalog_block_cat .uss_catalog_cat_name a,
.uss_photoalbums_albums_list .uss_albums_name a,
.uss_photoalbums_albums_block .uss_albums_name a,
.uss_photoalbums_albums_with_photo .uss_albums_name a,
.photoalbum_menu .photoalbum_menu_item > a a,
.service .uss_eshop_menu > li > a a,
.service .catalog_menu .catalog_menu_item > a a,
.services .uss_eshop_menu > li > a a,
.services .catalog_menu .catalog_menu_item > a a,
.uss_eshop_block_item .uss_shop_name a,
.content_menu a,
.uss_shop_list_cat .uss_shop_cat_name a,
.uss_shop_list_view .uss_shop_technical_data .uss_shop_name a,
.section_news .uss_news .groups_list .group_item .title a,
.section_news .uss_news .groups_block .group_item .title a,
.uss_eshop_sameproducts.blocks .item .title a,
.similar_items_block .news_item .info .title a,
.similar_items_list .news_item .title a,
.uss_eshop_sameproducts.list .item .title a,
.buy_one_click_form_tml .uss_title a,
.catalogs .uss_eshop_menu > li > a a,
.catalogs .catalog_menu > li > div > a a,
.product_cat .uss_eshop_menu > li > a a,
.product_cat .catalog_menu > li > div > a a,
.catalog_block .uss_eshop_menu > li > a a,
.catalog_block .catalog_menu > li > div > a a,
.block .news_block_item .info .title a,
.uss_widget_outer_content .news_block_item .title a,
.news_list .title a {
  font-size: inherit;
}
.uss_shop_table_view td.uss_title {
  font-size: 17px - 2px;
}
@media (max-width: 768px) {
  .uss_shop_blocks_view .uss_eshop_item .uss_shop_name,
  div.uss_tabs .uss_tabs_navigation span,
  .uss_shop_block_cat .uss_shop_cat_name,
  .uss_catalog_list_cat .uss_catalog_cat_name,
  .uss_catalog_block_cat .uss_catalog_cat_name,
  .uss_photoalbums_albums_list .uss_albums_name,
  .uss_photoalbums_albums_block .uss_albums_name,
  .uss_photoalbums_albums_with_photo .uss_albums_name,
  .photoalbum_menu .photoalbum_menu_item > a,
  .service .uss_eshop_menu > li > a,
  .service .catalog_menu .catalog_menu_item > a,
  .services .uss_eshop_menu > li > a,
  .services .catalog_menu .catalog_menu_item > a,
  .uss_eshop_block_item .uss_shop_name,
  .content_menu,
  .uss_shop_list_cat .uss_shop_cat_name,
  .uss_shop_list_view .uss_shop_technical_data .uss_shop_name,
  .section_news .uss_news .groups_list .group_item .title,
  .section_news .uss_news .groups_block .group_item .title,
  .uss_eshop_sameproducts.blocks .item .title,
  .similar_items_block .news_item .info .title,
  .similar_items_list .news_item .title,
  .uss_eshop_sameproducts.list .item .title,
  .buy_one_click_form_tml .uss_title,
  .catalogs .uss_eshop_menu > li > a,
  .catalogs .catalog_menu > li > div > a,
  .product_cat .uss_eshop_menu > li > a,
  .product_cat .catalog_menu > li > div > a,
  .catalog_block .uss_eshop_menu > li > a,
  .catalog_block .catalog_menu > li > div > a,
  .block .news_block_item .info .title,
  .uss_widget_outer_content .news_block_item .title,
  .news_list .title {
    font-size: 17px - 2px;
    font-weight: bold;
  }
  .uss_shop_blocks_view .uss_eshop_item .uss_shop_name a,
  div.uss_tabs .uss_tabs_navigation span a,
  .uss_shop_block_cat .uss_shop_cat_name a,
  .uss_catalog_list_cat .uss_catalog_cat_name a,
  .uss_catalog_block_cat .uss_catalog_cat_name a,
  .uss_photoalbums_albums_list .uss_albums_name a,
  .uss_photoalbums_albums_block .uss_albums_name a,
  .uss_photoalbums_albums_with_photo .uss_albums_name a,
  .photoalbum_menu .photoalbum_menu_item > a a,
  .service .uss_eshop_menu > li > a a,
  .service .catalog_menu .catalog_menu_item > a a,
  .services .uss_eshop_menu > li > a a,
  .services .catalog_menu .catalog_menu_item > a a,
  .uss_eshop_block_item .uss_shop_name a,
  .content_menu a,
  .uss_shop_list_cat .uss_shop_cat_name a,
  .uss_shop_list_view .uss_shop_technical_data .uss_shop_name a,
  .section_news .uss_news .groups_list .group_item .title a,
  .section_news .uss_news .groups_block .group_item .title a,
  .uss_eshop_sameproducts.blocks .item .title a,
  .similar_items_block .news_item .info .title a,
  .similar_items_list .news_item .title a,
  .uss_eshop_sameproducts.list .item .title a,
  .buy_one_click_form_tml .uss_title a,
  .catalogs .uss_eshop_menu > li > a a,
  .catalogs .catalog_menu > li > div > a a,
  .product_cat .uss_eshop_menu > li > a a,
  .product_cat .catalog_menu > li > div > a a,
  .catalog_block .uss_eshop_menu > li > a a,
  .catalog_block .catalog_menu > li > div > a a,
  .block .news_block_item .info .title a,
  .uss_widget_outer_content .news_block_item .title a,
  .news_list .title a {
    font-size: inherit;
  }
}
.uss_eshop_sameproducts.blocks .item .descr,
.uss_eshop_sameproducts.list .item .descr,
.service .uss_eshop_menu > li .uss_tree_description,
.service .catalog_menu .catalog_menu_item .uss_tree_description,
.uss_shop_block_cat .uss_shop_cat_text,
.uss_catlog_cat_anons,
.uss_catalog_detail .uss_catalog_short_description,
.uss_shop_list_cat .uss_shop_cat_text,
.uss_buy_one_click_pos .uss_onepos_info .uss_description,
.uss_shop_description,
.news_block_item .preview,
.news_list .preview,
.groups_list .description,
.uss_shop_full_description,
.section_news .uss_news .groups_list .group_item .description,
.section_news .uss_news .groups_block .group_item .description,
.uss_photoalbums_albums_block .uss_albums_description,
.uss_photoalbums_albums_with_photo .uss_albums_description,
.uss_photoalbums_albums_list .uss_albums_description,
.catalogs .uss_eshop_menu .uss_tree_description,
.catalogs .catalog_menu .uss_tree_description,
.product_cat .uss_eshop_menu .uss_tree_description,
.product_cat .catalog_menu .uss_tree_description,
div.uss_tabs .tab_item,
.content .section.section_text,
.uss_widget_outer_content .news_block_item .preview,
.photoalbum_menu .photoalbum_menu_item .uss_tree_description {
  font-size: 15px;
}
.uss_eshop_sameproducts.blocks .item .descr p,
.uss_eshop_sameproducts.list .item .descr p,
.service .uss_eshop_menu > li .uss_tree_description p,
.service .catalog_menu .catalog_menu_item .uss_tree_description p,
.uss_shop_block_cat .uss_shop_cat_text p,
.uss_catlog_cat_anons p,
.uss_catalog_detail .uss_catalog_short_description p,
.uss_shop_list_cat .uss_shop_cat_text p,
.uss_buy_one_click_pos .uss_onepos_info .uss_description p,
.uss_shop_description p,
.news_block_item .preview p,
.news_list .preview p,
.groups_list .description p,
.uss_shop_full_description p,
.section_news .uss_news .groups_list .group_item .description p,
.section_news .uss_news .groups_block .group_item .description p,
.uss_photoalbums_albums_block .uss_albums_description p,
.uss_photoalbums_albums_with_photo .uss_albums_description p,
.uss_photoalbums_albums_list .uss_albums_description p,
.catalogs .uss_eshop_menu .uss_tree_description p,
.catalogs .catalog_menu .uss_tree_description p,
.product_cat .uss_eshop_menu .uss_tree_description p,
.product_cat .catalog_menu .uss_tree_description p,
div.uss_tabs .tab_item p,
.content .section.section_text p,
.uss_widget_outer_content .news_block_item .preview p,
.photoalbum_menu .photoalbum_menu_item .uss_tree_description p,
.uss_eshop_sameproducts.blocks .item .descr span,
.uss_eshop_sameproducts.list .item .descr span,
.service .uss_eshop_menu > li .uss_tree_description span,
.service .catalog_menu .catalog_menu_item .uss_tree_description span,
.uss_shop_block_cat .uss_shop_cat_text span,
.uss_catlog_cat_anons span,
.uss_catalog_detail .uss_catalog_short_description span,
.uss_shop_list_cat .uss_shop_cat_text span,
.uss_buy_one_click_pos .uss_onepos_info .uss_description span,
.uss_shop_description span,
.news_block_item .preview span,
.news_list .preview span,
.groups_list .description span,
.uss_shop_full_description span,
.section_news .uss_news .groups_list .group_item .description span,
.section_news .uss_news .groups_block .group_item .description span,
.uss_photoalbums_albums_block .uss_albums_description span,
.uss_photoalbums_albums_with_photo .uss_albums_description span,
.uss_photoalbums_albums_list .uss_albums_description span,
.catalogs .uss_eshop_menu .uss_tree_description span,
.catalogs .catalog_menu .uss_tree_description span,
.product_cat .uss_eshop_menu .uss_tree_description span,
.product_cat .catalog_menu .uss_tree_description span,
div.uss_tabs .tab_item span,
.content .section.section_text span,
.uss_widget_outer_content .news_block_item .preview span,
.photoalbum_menu .photoalbum_menu_item .uss_tree_description span {
  font-size: inherit;
}
.similar_items_block .news_item .date,
.similar_items_list .news_item .date,
.news_block_item .date,
.uss_widget_outer_content .news_block_item .date,
.news_list .date {
  font-size: 15px;
}
.similar_items_block .news_item .date p,
.similar_items_list .news_item .date p,
.news_block_item .date p,
.uss_widget_outer_content .news_block_item .date p,
.news_list .date p,
.similar_items_block .news_item .date span,
.similar_items_list .news_item .date span,
.news_block_item .date span,
.uss_widget_outer_content .news_block_item .date span,
.news_list .date span {
  font-size: inherit;
}
@media (max-width: 768px) {
  .uss_eshop_sameproducts.blocks .item .descr,
  .uss_eshop_sameproducts.list .item .descr,
  .service .uss_eshop_menu > li .uss_tree_description,
  .service .catalog_menu .catalog_menu_item .uss_tree_description,
  .uss_shop_block_cat .uss_shop_cat_text,
  .uss_catlog_cat_anons,
  .uss_catalog_detail .uss_catalog_short_description,
  .uss_shop_list_cat .uss_shop_cat_text,
  .uss_buy_one_click_pos .uss_onepos_info .uss_description,
  .uss_shop_description,
  .news_block_item .preview,
  .news_list .preview,
  .groups_list .description,
  .uss_shop_full_description,
  .section_news .uss_news .groups_list .group_item .description,
  .section_news .uss_news .groups_block .group_item .description,
  .uss_photoalbums_albums_block .uss_albums_description,
  .uss_photoalbums_albums_with_photo .uss_albums_description,
  .uss_photoalbums_albums_list .uss_albums_description,
  .catalogs .uss_eshop_menu .uss_tree_description,
  .catalogs .catalog_menu .uss_tree_description,
  .product_cat .uss_eshop_menu .uss_tree_description,
  .product_cat .catalog_menu .uss_tree_description,
  div.uss_tabs .tab_item,
  .content .section.section_text,
  .uss_widget_outer_content .news_block_item .preview,
  .photoalbum_menu .photoalbum_menu_item .uss_tree_description {
    font-size: 15px - 0px;
  }
  .uss_eshop_sameproducts.blocks .item .descr p,
  .uss_eshop_sameproducts.list .item .descr p,
  .service .uss_eshop_menu > li .uss_tree_description p,
  .service .catalog_menu .catalog_menu_item .uss_tree_description p,
  .uss_shop_block_cat .uss_shop_cat_text p,
  .uss_catlog_cat_anons p,
  .uss_catalog_detail .uss_catalog_short_description p,
  .uss_shop_list_cat .uss_shop_cat_text p,
  .uss_buy_one_click_pos .uss_onepos_info .uss_description p,
  .uss_shop_description p,
  .news_block_item .preview p,
  .news_list .preview p,
  .groups_list .description p,
  .uss_shop_full_description p,
  .section_news .uss_news .groups_list .group_item .description p,
  .section_news .uss_news .groups_block .group_item .description p,
  .uss_photoalbums_albums_block .uss_albums_description p,
  .uss_photoalbums_albums_with_photo .uss_albums_description p,
  .uss_photoalbums_albums_list .uss_albums_description p,
  .catalogs .uss_eshop_menu .uss_tree_description p,
  .catalogs .catalog_menu .uss_tree_description p,
  .product_cat .uss_eshop_menu .uss_tree_description p,
  .product_cat .catalog_menu .uss_tree_description p,
  div.uss_tabs .tab_item p,
  .content .section.section_text p,
  .uss_widget_outer_content .news_block_item .preview p,
  .photoalbum_menu .photoalbum_menu_item .uss_tree_description p,
  .uss_eshop_sameproducts.blocks .item .descr span,
  .uss_eshop_sameproducts.list .item .descr span,
  .service .uss_eshop_menu > li .uss_tree_description span,
  .service .catalog_menu .catalog_menu_item .uss_tree_description span,
  .uss_shop_block_cat .uss_shop_cat_text span,
  .uss_catlog_cat_anons span,
  .uss_catalog_detail .uss_catalog_short_description span,
  .uss_shop_list_cat .uss_shop_cat_text span,
  .uss_buy_one_click_pos .uss_onepos_info .uss_description span,
  .uss_shop_description span,
  .news_block_item .preview span,
  .news_list .preview span,
  .groups_list .description span,
  .uss_shop_full_description span,
  .section_news .uss_news .groups_list .group_item .description span,
  .section_news .uss_news .groups_block .group_item .description span,
  .uss_photoalbums_albums_block .uss_albums_description span,
  .uss_photoalbums_albums_with_photo .uss_albums_description span,
  .uss_photoalbums_albums_list .uss_albums_description span,
  .catalogs .uss_eshop_menu .uss_tree_description span,
  .catalogs .catalog_menu .uss_tree_description span,
  .product_cat .uss_eshop_menu .uss_tree_description span,
  .product_cat .catalog_menu .uss_tree_description span,
  div.uss_tabs .tab_item span,
  .content .section.section_text span,
  .uss_widget_outer_content .news_block_item .preview span,
  .photoalbum_menu .photoalbum_menu_item .uss_tree_description span {
    font-size: inherit;
  }
  .similar_items_block .news_item .date,
  .similar_items_list .news_item .date,
  .news_block_item .date,
  .uss_widget_outer_content .news_block_item .date,
  .news_list .date {
    font-size: 15px - 0px;
  }
  .similar_items_block .news_item .date p,
  .similar_items_list .news_item .date p,
  .news_block_item .date p,
  .uss_widget_outer_content .news_block_item .date p,
  .news_list .date p,
  .similar_items_block .news_item .date span,
  .similar_items_list .news_item .date span,
  .news_block_item .date span,
  .uss_widget_outer_content .news_block_item .date span,
  .news_list .date span {
    font-size: inherit;
  }
}
.block .news_block_item .title {
  font-weight: bold;
  font-size: 17px;
}
.block .news_block_item .title a {
  font-size: inherit;
}
.block .uss_widget_outer_content .uss_eshop_block_item .uss_shop_name {
  font-weight: bold;
  font-size: 17px;
}
.block .uss_widget_outer_content .uss_eshop_block_item .uss_shop_name a {
  font-size: inherit;
}
@media (max-width: 768px) {
  .block .news_block_item .title {
    font-weight: bold;
    font-size: 17px - 2px;
  }
  .block .news_block_item .title a {
    font-size: inherit;
  }
  .block .uss_widget_outer_content .uss_eshop_block_item .uss_shop_name {
    font-weight: bold;
    font-size: 17px - 2px;
  }
  .block .uss_widget_outer_content .uss_eshop_block_item .uss_shop_name a {
    font-size: inherit;
  }
}
.catalog_orderform_window .fc_form_tml {
  margin: 0;
}
.catalog_orderform_window form input.styler,
.catalog_orderform_window form textarea.styler {
  width: 100%;
  max-width: 100%;
}
@media (min-width: 1001px) and (max-width: 1200px) {
  .slider .image.width_more.height_fit img {
    max-width: none !important;
  }
  .colorStyle3 .slider .slides {
    -webkit-box-flex: 1;
        -ms-flex: 1 auto;
            flex: 1 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
  }
  .colorStyle3 .slider .slides .slick-list {
    -webkit-box-flex: 1;
        -ms-flex: 1 auto;
            flex: 1 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
  }
  .colorStyle3 .slider .slides .slick-list > div {
    -webkit-box-flex: 1;
        -ms-flex: 1 auto;
            flex: 1 auto;
  }
  .colorStyle3 .slider .slides .slick-list .slick-slide {
    -webkit-box-flex: 1;
        -ms-flex: 1 auto;
            flex: 1 auto;
  }
  .colorStyle3 .slider .slides .slick-list .slick-slide > div {
    height: 100%;
  }
  .colorStyle3 .slider .slides .slick-list .slick-slide .slide {
    height: 100%;
  }
  .colorStyle3 .slider .slides .slick-list .slick-slide .slide .image {
    height: 100% !important;
  }
}
@media (max-width: 1200px) {
  .h_nav_top .inner {
    padding-right: 10px;
    padding-left: 10px;
  }
  .inset {
    padding: 0;
  }
  .uss_shop_blocks_view .uss_eshop_item .uss_img_holder {
    height: auto !important;
    max-width: 100% !important;
  }
}
@media (max-width: 850px) {
  table.table tr td {
    width: calc(100% / 3);
  }
  .catalog_block.x5 ul.uss_eshop_menu > li {
    max-width: calc((100% - 20px) / 3);
  }
  .catalog_block.x5 .uss_catalog_sidebar .uss_catalog_category {
    max-width: calc((100% - 20px) / 3);
  }
  .catalog_block.x5 .catalog_menu li {
    max-width: calc((100% - 20px) / 3);
  }
  .catalog_block.x4 ul.uss_eshop_menu > li {
    max-width: calc((100% - 20px) / 3);
  }
  .catalog_block.x4 .uss_catalog_sidebar .uss_catalog_category {
    max-width: calc((100% - 20px) / 3);
  }
  .catalog_block.x4 .catalog_menu li {
    max-width: calc((100% - 20px) / 3);
  }
}
@media (max-width: 1000px) {
  .slider_wrap .slide_aside {
    display: none;
  }
  .slider_wrap .slider {
    width: 100%;
  }
  .container .inner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    row-gap: 18px;
  }
  .container .inner > div {
    width: 100%;
  }
  .container .inner > .slider_wrap {
    margin-bottom: 0 ;
  }
  .colorStyle6 .h_nav_top .left {
    line-height: 1.5;
    float: none;
  }
  .colorStyle6 .h_nav_top .center {
    line-height: 1.5;
    display: block;
    padding: 0;
    text-align: left;
  }
  .colorStyle6 .h_nav_top .center > div {
    display: block;
  }
  #wrap .aside {
    float: none;
    width: 100%;
    margin: 0 0 0 0;
  }
  #wrap .aside .aside_button {
    font-family: 'Vremena Grotesk';
    font-size: 20px;
    line-height: 40px;
    display: block;
    margin-bottom: 10px;
    padding: 0 0 0 0;
    text-align: center;
    text-transform: uppercase;
    color: #222222;
    background: #f4f5f6;
  }
  #wrap .aside > div:not(.aside_button) {
    display: none;
  }
  #wrap .aside > div:not(.aside_button) > .h3 {
    display: none;
  }
  #wrap .aside > div:not(.aside_button) h3 {
    display: none;
  }
  .slide .slide_aside {
    display: none;
  }
  .footer .right .dev {
    padding: 0;
  }
  .footer .left .contacts {
    padding-bottom: 0;
  }
  .uss_shop_blocks_view .uss_eshop_item .uss_img_holder {
    height: auto !important;
    max-width: 100% !important;
  }
  .uss_eshop_filters_block {
    padding: 20px 25px;
  }
  .content .uss_eshop_filters_block form .group .eshop_filters_items .eshop_filters {
    -webkit-box-flex: 0;
        -ms-flex: 0 100%;
            flex: 0 100%;
    max-width: 100%;
  }
  .block.news.x3 .news_block_item {
    width: 100%;
    max-width: calc((100% - 10px) / 2);
  }
}
@media (max-width: 960px) {
  .footer .inner {
    padding-top: 15px;
    padding-bottom: 15px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
  }
  .footer .inner:before {
    content: none;
  }
  .footer .inner:after {
    content: none;
  }
  .footer .center {
    -webkit-box-ordinal-group: -10;
        -ms-flex-order: -11;
            order: -11;
    -webkit-box-flex: 0;
        -ms-flex: 0 100%;
            flex: 0 100%;
  }
  .footer .contacts {
    padding: 0;
  }
  .footer .contacts p {
    line-height: 1.65em;
  }
}
@media (max-width: 950px) {
  .header .logo {
    font-size: 30px;
  }
}
@media (max-width: 850px) {
  .colorStyle3 .catalog_block.x5 ul.uss_eshop_menu > li,
  .colorStyle5 .catalog_block.x5 ul.uss_eshop_menu > li,
  .colorStyle6 .catalog_block.x5 ul.uss_eshop_menu > li {
    max-width: calc((100% - 20px) / 3);
  }
  .colorStyle3 .catalog_block.x5 .uss_catalog_sidebar .uss_catalog_category,
  .colorStyle5 .catalog_block.x5 .uss_catalog_sidebar .uss_catalog_category,
  .colorStyle6 .catalog_block.x5 .uss_catalog_sidebar .uss_catalog_category {
    max-width: calc((100% - 20px) / 3);
  }
  .colorStyle3 .catalog_block.x5 .catalog_menu li,
  .colorStyle5 .catalog_block.x5 .catalog_menu li,
  .colorStyle6 .catalog_block.x5 .catalog_menu li {
    max-width: calc((100% - 20px) / 3);
  }
  .colorStyle3 .catalog_block.x4 ul.uss_eshop_menu > li,
  .colorStyle5 .catalog_block.x4 ul.uss_eshop_menu > li,
  .colorStyle6 .catalog_block.x4 ul.uss_eshop_menu > li {
    max-width: calc((100% - 20px) / 3);
  }
  .colorStyle3 .catalog_block.x4 .uss_catalog_sidebar .uss_catalog_category,
  .colorStyle5 .catalog_block.x4 .uss_catalog_sidebar .uss_catalog_category,
  .colorStyle6 .catalog_block.x4 .uss_catalog_sidebar .uss_catalog_category {
    max-width: calc((100% - 20px) / 3);
  }
  .colorStyle3 .catalog_block.x4 .catalog_menu li,
  .colorStyle5 .catalog_block.x4 .catalog_menu li,
  .colorStyle6 .catalog_block.x4 .catalog_menu li {
    max-width: calc((100% - 20px) / 3);
  }
}
@media (max-width: 776px) {
  .container .block .h3 {
    font-size: 22px;
  }
  .container .inner {
    padding-top: 0;
  }
  .container .block > .all {
    height: 29px;
  }
  .uss_eshop_filters_block .jq-selectbox .jq-selectbox__select {
    width: 100%;
  }
  .header .inner {
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .uss_shop_block_cat .uss_shop_category .uss_shop_cat_name a {
    font-size: 15px;
  }
}
@media (max-width: 768px) {
  .inner {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
  .h_nav_top .right {
    padding-right: 45px;
  }
  .h_nav_top .cart {
    display: none !important;
  }
  .h_nav_top .search {
    display: none;
  }
  .h_nav_top .cart_opener {
    display: block;
  }
  .h_nav_top .search_opener {
    display: block;
  }
  .h_nav_top .menu_burger {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    position: fixed;
    right: 10px;
    top: 16px;
    width: 30px;
    height: 30px;
    margin: 0;
    z-index: 10;
  }
  .h_nav_top .menu_burger span {
    display: block;
    height: 3px;
    -webkit-box-shadow: 0 0 2px #000 !important;
            box-shadow: 0 0 2px #000 !important;
    background: #fff !important;
    border-radius: 3px !important;
  }
  .menu.top_menu .menu_burger {
    display: block;
  }
  .content {
    row-gap: 22px;
  }
  .top_menu {
    position: fixed;
    z-index: 100;
    top: 66px;
    right: 0;
    left: 0;
    display: none;
  }
  .top_menu .inner > ul {
    width: 100%;
    padding: 10px 0;
    background: #a1536d;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
  .top_menu .inner > ul > li {
    height: auto;
    -webkit-box-flex: 0;
        -ms-flex: 0 100%;
            flex: 0 100%;
  }
  .top_menu .inner > ul > li > a {
    font-size: 18px;
    height: auto;
    padding: 7px 0;
    color: #ffffff !important;
    border: none !important;
  }
  .top_menu .inner ul li {
    padding-left: 0;
    padding-right: 0;
  }
  .top_menu .inner ul li:hover .submenu {
    display: none;
  }
  .top_menu .inner ul li.clicked > .submenu {
    border-top: 1px solid #fff !important;
    color: #fff;
    position: static;
    display: block;
    border: none;
    opacity: 1;
  }
  .top_menu .inner ul li.clicked > .submenu > li {
    padding: 0;
  }
  .top_menu .inner ul li.clicked > .submenu > li a {
    color: #fff;
    font-size: 15px;
    letter-spacing: 0.3px;
    padding-left: 3px;
    padding-right: 3px;
  }
  .top_menu ul li .submenu {
    display: none;
    opacity: 0;
  }
  .menu_burger {
    display: block;
  }
  .container .form_inline form {
    display: block;
    padding-right: 10px;
    padding-left: 10px;
  }
  .container .form_inline form:before {
    display: table;
    content: '';
  }
  .container .form_inline form:after {
    display: table;
    content: '';
    clear: both;
  }
  .container .form_inline form .group > div:nth-of-type(2n) {
    margin-right: 0 !important;
  }
  .container .form_inline form .buttons {
    display: block;
    width: 100%;
    max-width: 100%;
    margin-left: 0;
    text-align: center;
  }
  .container .form_inline form .buttons input {
    width: 49%;
  }
  .container .form_inline form .group.end {
    max-width: 100%;
  }
  .uss_eshop_filters_block:not(.simple_filters) form .filter_submit {
    max-width: 100%;
    width: 100%;
    text-align: center;
    padding-top: 10px;
  }
  .colorStyle3 .slider_wrap .slider {
    width: 100%;
    height: auto;
  }
  .colorStyle3 .slider_wrap .slider .slides {
    width: 100%;
  }
  .uss_user_basket .uss_name .uss_title {
    overflow: visible;
    height: auto;
  }
  #wrap {
    font-size: 15px;
  }
  h1 {
    font-size: 21px !important;
    margin-bottom: 10px !important;
  }
  .h1 {
    font-size: 21px !important;
    margin-bottom: 10px !important;
  }
  h3 {
    font-size: 21px !important;
    margin-bottom: 10px !important;
  }
  .h3 {
    font-size: 21px !important;
    margin-bottom: 10px !important;
  }
  .singlepage .module_catalog .catalog_order_form h3 {
    font-size: 22px !important;
    margin-bottom: 10px !important;
  }
  .bread {
    font-size: 15px;
  }
  .uss_shop_description {
    font-size: 15px;
  }
  .uss_shop_full_description {
    font-size: 15px;
  }
  .uss_catalog_description {
    font-size: 15px;
  }
  .uss_section_content > .uss_eshop_filters {
    font-size: 15px;
  }
  .eshop_filters_area {
    font-size: 15px;
  }
  .uss_eshop_sameproducts.list .item .title {
    font-size: 15px;
  }
  div.uss_tabs .tab_item {
    font-size: 15px;
  }
  .slider .slide .caption {
    right: 50px;
  }
  .slider .slide .caption .title {
    font-size: 23px;
  }
  .slider .slide .caption .preview {
    font-size: 15px;
  }
  .contacts_block .map-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
        -ms-flex-direction: column-reverse;
            flex-direction: column-reverse;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
  }
  .contacts_block .left {
    width: 100%;
  }
  .contacts_block .left .map > ymaps {
    height: auto;
    max-height: 50vh;
    min-height: none;
  }
  .contacts_block .contacts {
    position: static;
    -webkit-transform: translate(0);
            transform: translate(0);
    padding: 0;
    margin: 0 0 10px 0;
  }
  .block.faq .uss_faq {
    row-gap: 10px;
  }
  .block.faq .uss_faq .uss_faq_item {
    max-width: 100%;
  }
  .block.faq .uss_faq .uss_faq_item .uss_faq_question_text {
    font-size: 18px;
  }
  .block.faq .uss_guestbook_item {
    max-width: 100%;
    margin-bottom: 10px;
  }
  .block.news.x3 .news_block_item {
    width: 100%;
    max-width: 100%;
  }
}
@media (max-width: 700px) {
  .big_block.review .review-items .review-item {
    -webkit-box-flex: 0;
        -ms-flex: 0 100%;
            flex: 0 100%;
    padding-right: 0;
    padding-bottom: 20px;
    margin: 0;
  }
  .big_block.review .review-items .review-item:last-of-type {
    padding-bottom: 0;
  }
  .big_block.review .review-items .review-item .review-item {
    padding-top: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
  }
  .big_block.review .review-items .review-item .left {
    margin-right: 20px;
  }
  .catalog_block .uss_catalog_sidebar .uss_catalog_category {
    max-width: calc((100% - 20px) / 2) !important;
  }
  .catalog_block .uss_catalog_sidebar .uss_catalog_category .uss_catalog_cat_img img {
    display: block;
    max-width: 100%;
  }
  .container .contacts_block .map-wrap {
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
  .container .contacts_block .left {
    -webkit-box-flex: 0;
        -ms-flex: 0 100%;
            flex: 0 100%;
    padding: 0 0 0 0;
  }
  .container .contacts_block .right {
    -webkit-box-flex: 0;
        -ms-flex: 0 100%;
            flex: 0 100%;
    -webkit-box-ordinal-group: -10;
        -ms-flex-order: -11;
            order: -11;
    padding: 0 0 0 0;
  }
  .header .logo {
    font-size: 24px;
  }
  div.uss_tabs div.uss_tabs_navigation span {
    width: 100%;
  }
  div.uss_tabs div.uss_tabs_navigation span:not(:first-child) {
    border-radius: 0;
  }
}
@media (max-width: 728px) and (min-width: 481px) {
  .catalog_block .catalog_menu li .catalog_menu_item {
    width: 100%;
  }
  .catalog_block .catalog_menu li .catalog_menu_item img {
    max-width: 100%;
    height: auto;
  }
  .eshop_block ul.uss_eshop_menu > li > span {
    width: 100%;
  }
  .eshop_block ul.uss_eshop_menu > li > span img {
    max-width: 100%;
    height: auto;
  }
  .eshop_block .uss_eshop_menu > li > span {
    width: 100%;
  }
  .eshop_block .uss_eshop_menu > li > span img {
    max-width: 100%;
    height: auto;
  }
  .uss_shop_block_cat .uss_shop_category .uss_shop_cat_img_wrap {
    max-width: 100% !important;
    height: auto !important;
  }
  .uss_shop_block_cat .uss_shop_category .uss_shop_cat_img_wrap .uss_shop_cat_img {
    position: relative;
    display: block;
    width: 100% !important;
  }
  .uss_shop_block_cat .uss_shop_category .uss_shop_cat_img_wrap .uss_shop_cat_img img {
    display: block;
    max-width: 100% !important;
    height: auto !important;
    margin: 0 auto;
  }
  .uss_catalog_block_cat .uss_catalog_category .uss_catalog_cat_img {
    width: 100%;
  }
  .uss_catalog_block_cat .uss_catalog_category .uss_catalog_cat_img img {
    max-width: 100%;
    height: auto;
  }
  .uss_shop_blocks_view .uss_eshop_item .posimg_item {
    width: 100%;
    max-width: 100%;
  }
  .uss_shop_blocks_view .uss_eshop_item .posimg_item img {
    max-width: 100%;
    height: auto;
  }
}
@media (max-width: 728px) {
  .uss_shop_blocks_view .uss_eshop_item .posimg_item .uss_img_holder {
    height: auto !important;
  }
  .uss_shop_blocks_view .uss_eshop_item .uss_shop_name a {
    height: 2.4em;
  }
  .uss_shop_block_cat .uss_shop_category {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
  .uss_shop_block_cat .uss_shop_category .uss_shop_cat_img_wrap {
    height: auto;
    -webkit-box-flex: 0;
        -ms-flex: 0 auto;
            flex: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    max-width: 100%;
  }
  .uss_shop_block_cat .uss_shop_category .uss_shop_cat_img_wrap .uss_shop_cat_img {
    height: auto !important;
  }
  .uss_catalog_block_cat .uss_catalog_category {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
  .uss_catalog_block_cat .uss_catalog_category .uss_catalog_cat_img {
    height: auto;
    -webkit-box-flex: 0;
        -ms-flex: 0 auto;
            flex: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    max-width: 100%;
  }
  .uss_catalog_block_cat .uss_catalog_category .catalog_info {
    -webkit-box-flex: 1;
        -ms-flex: 1 auto;
            flex: 1 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
  .uss_catalog_block_cat .uss_catalog_category .uss_catalog_cat_name {
    -webkit-box-flex: 1;
        -ms-flex: 1 auto;
            flex: 1 auto;
  }
  .items .uss_eshop_block_item {
    max-width: calc((100% - 20px) / 3);
  }
}
@media (max-width: 650px) {
  table.table_block > tbody > tr > td {
    width: 100%;
  }
  .uss_shop_blocks_view .uss_eshop_item .uss_shop_by.uss_shop_buy_one_click {
    margin-right: 0;
    margin-left: 0;
    padding-left: 0 !important;
  }
  .uss_shop_blocks_view .uss_eshop_item .uss_shop_by.uss_shop_buy_one_click a {
    width: 100% !important;
    margin-left: 0;
    padding-left: 0;
    background-image: none;
  }
  .uss_shop_blocks_view .uss_eshop_item .uss_shop_by:not(.uss_shop_buy_one_click) {
    padding-left: 0 !important;
  }
  .uss_shop_blocks_view .uss_eshop_item .buttons {
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    row-gap: 7px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 9px;
    padding-bottom: 7px;
  }
  .uss_shop_blocks_view .uss_eshop_item .buttons > * {
    padding-top: 0;
    padding-bottom: 0;
  }
  .uss_eshop_sameproducts.blocks .item {
    max-width: calc((100% - 10px) / 2);
  }
  .footer_menu {
    display: none;
  }
  .uss_eshop_filters_block form .group .eshop_filters_items .eshop_filters {
    max-width: 100%;
    -webkit-box-flex: 0;
        -ms-flex: 0 100%;
            flex: 0 100%;
  }
  .uss_eshop_filters_block form .filter_item.filter_price {
    max-width: 100%;
    width: 100%;
    padding-top: 0;
  }
  .uss_eshop_filters_block form .filter_item.filter_producer {
    max-width: 100%;
    width: 100%;
    padding-top: 0;
  }
  .uss_eshop_filters_block form .filter_item {
    -webkit-box-flex: 0;
        -ms-flex: 0 100%;
            flex: 0 100%;
  }
  .uss_eshop_filters_block form .filter_submit {
    max-width: 100%;
    width: 100%;
    text-align: center;
    padding-top: 10px;
  }
  .uss_eshop_filters_block.simple_filters form .filter_price.filter_item {
    -webkit-box-flex: 1;
        -ms-flex: 1 auto;
            flex: 1 auto;
    width: auto;
  }
  .uss_eshop_filters_block.simple_filters form .filter_submit {
    width: auto;
    -webkit-box-flex: 0;
        -ms-flex: 0 auto;
            flex: 0 auto;
  }
  .catalog_block.x5 ul.uss_eshop_menu > li {
    max-width: calc((100% - 10px) / 2);
  }
  .catalog_block.x5 .uss_catalog_sidebar .uss_catalog_category {
    max-width: calc((100% - 10px) / 2);
  }
  .catalog_block.x5 .catalog_menu li {
    max-width: calc((100% - 10px) / 2);
  }
  .catalog_block.x4 ul.uss_eshop_menu > li {
    max-width: calc((100% - 10px) / 2);
  }
  .catalog_block.x4 .uss_catalog_sidebar .uss_catalog_category {
    max-width: calc((100% - 10px) / 2);
  }
  .catalog_block.x4 .catalog_menu li {
    max-width: calc((100% - 10px) / 2);
  }
  .catalog_block.x3 ul.uss_eshop_menu > li {
    max-width: calc((100% - 10px) / 2);
  }
  .catalog_block.x3 .uss_catalog_sidebar .uss_catalog_category {
    max-width: calc((100% - 10px) / 2);
  }
  .catalog_block.x3 .catalog_menu li {
    max-width: calc((100% - 10px) / 2);
  }
  .colorStyle3 .catalog_block.x5 ul.uss_eshop_menu > li,
  .colorStyle5 .catalog_block.x5 ul.uss_eshop_menu > li,
  .colorStyle6 .catalog_block.x5 ul.uss_eshop_menu > li {
    max-width: calc((100% - 10px) / 2);
  }
  .colorStyle3 .catalog_block.x5 .uss_catalog_sidebar .uss_catalog_category,
  .colorStyle5 .catalog_block.x5 .uss_catalog_sidebar .uss_catalog_category,
  .colorStyle6 .catalog_block.x5 .uss_catalog_sidebar .uss_catalog_category {
    max-width: calc((100% - 10px) / 2);
  }
  .colorStyle3 .catalog_block.x5 .catalog_menu li,
  .colorStyle5 .catalog_block.x5 .catalog_menu li,
  .colorStyle6 .catalog_block.x5 .catalog_menu li {
    max-width: calc((100% - 10px) / 2);
  }
  .colorStyle3 .catalog_block.x4 ul.uss_eshop_menu > li,
  .colorStyle5 .catalog_block.x4 ul.uss_eshop_menu > li,
  .colorStyle6 .catalog_block.x4 ul.uss_eshop_menu > li {
    max-width: calc((100% - 10px) / 2);
  }
  .colorStyle3 .catalog_block.x4 .uss_catalog_sidebar .uss_catalog_category,
  .colorStyle5 .catalog_block.x4 .uss_catalog_sidebar .uss_catalog_category,
  .colorStyle6 .catalog_block.x4 .uss_catalog_sidebar .uss_catalog_category {
    max-width: calc((100% - 10px) / 2);
  }
  .colorStyle3 .catalog_block.x4 .catalog_menu li,
  .colorStyle5 .catalog_block.x4 .catalog_menu li,
  .colorStyle6 .catalog_block.x4 .catalog_menu li {
    max-width: calc((100% - 10px) / 2);
  }
  .uss_catalog_detail .uss_img_wrapper {
    float: none;
    clear: both;
    margin: 0 auto 20px;
    display: block;
  }
  .uss_catalog_detail .uss_img_wrapper .uss_img_big {
    text-align: center;
  }
  .footer {
    margin-top: 15px;
  }
  .footer .inner {
    position: relative;
    padding-top: 28px !important;
  }
  .footer .inner:after {
    content: '';
    left: 20%;
    right: 20%;
    top: 0;
    height: 1px;
    background: #dcdbd7;
    position: absolute;
  }
}
@media (max-width: 600px) {
  .uss_shop_detail .uss_img_wrapper {
    display: block;
    margin: 0 auto 20px;
    float: none;
    text-align: center;
  }
  .uss_shop_detail .uss_img_wrapper .uss_img_big {
    border: none !important;
    float: none;
  }
  .uss_shop_detail .uss_img_wrapper .uss_img_big .uss_img_big_image {
    max-width: 100%;
  }
  .uss_shop_detail .uss_img_wrapper .uss_img_big .uss_img_big_image img {
    max-width: 100%;
  }
  .uss_shop_detail .uss_img_wrapper:after {
    content: '';
    display: table;
    clear: both;
  }
  .uss_shop_detail .uss_img_wrapper .uss_img_ico_box:after {
    content: '';
    display: table;
    clear: both;
  }
  .uss_shop_detail .uss_shop_technical_data {
    clear: both;
    display: block;
    width: 100%;
  }
  .slider_wrap .slider .slick-prev {
    width: 50px;
    height: 50px;
    background-size: 20px auto;
  }
  .slider_wrap .slider .slick-next {
    width: 50px;
    height: 50px;
    background-size: 20px auto;
  }
  .slider .slide .image {
    overflow: hidden;
  }
  .slider .slide .image img {
    width: auto !important;
    max-width: none !important;
    height: 100% !important;
  }
  .slider .slide .caption {
    position: static;
    text-align: center;
    padding: 10px;
  }
  .slider .slide .caption .title {
    font-size: 28px;
  }
  .slider .slide .caption .title {
    font-size: 18px;
  }
  #tab_comments .uss_form_tml form {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    row-gap: 10px;
  }
  #tab_comments .uss_form_tml form .uss_form_item {
    width: 100%;
    max-width: 100%;
    margin: 0;
  }
  #tab_comments .uss_form_tml form .uss_form_item.uss_form_checkbox label {
    font-weight: normal !important;
    font-size: 14px !important;
  }
  #tab_comments .uss_form_tml form .uss_form_submit input {
    width: 100%;
  }
  form#ommentaddform_id {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    row-gap: 10px;
  }
  form#ommentaddform_id > .uss_form_item {
    width: 100%;
    max-width: 100%;
    margin: 0 !important;
  }
  form#ommentaddform_id > .uss_form_item.uss_form_checkbox label {
    font-weight: normal !important;
    font-size: 14px !important;
  }
  form#ommentaddform_id > .uss_form_submit input {
    width: 100%;
  }
  form#ommentaddform_id > .uss_form_item.uss_form_checkbox {
    width: 100%;
    max-width: 100%;
  }
}
@media (max-width: 560px) {
  table.table tr td {
    width: calc(100% / 2);
  }
  .container .form_inline form .group {
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    margin-bottom: 0;
  }
  .container .form_inline form .group:not(.end) .fc_item:not(.fc_textarea) {
    max-width: 100%;
    -webkit-box-flex: 0;
        -ms-flex: 0 100%;
            flex: 0 100%;
    margin-bottom: 20px;
  }
  .container .form_inline form .group.end {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
@media (max-width: 551px) {
  .uss_eshop_filters_block .filter_submit {
    margin-left: 0;
  }
  .footer .inner {
    padding-top: 10px;
    padding-bottom: 10px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    text-align: center;
  }
  .footer .left {
    -webkit-box-flex: 0;
        -ms-flex: 0 100%;
            flex: 0 100%;
    padding: 0 0 15px 0;
    text-align: center;
  }
  .footer .right {
    -webkit-box-flex: 0;
        -ms-flex: 0 100%;
            flex: 0 100%;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 0 0 15px 0;
    text-align: center;
  }
  .footer .center {
    padding: 0 0 15px 0;
    text-align: center;
  }
  .footer .center a {
    font-size: 15px;
  }
  .footer .contacts {
    text-align: center;
  }
}
@media (max-width: 550px) {
  .uss_shop_form .buttons .submit {
    width: 100%;
  }
}
@media (max-width: 540px) {
  .footer .inner {
    padding-top: 18px;
  }
  .footer-logo-row {
    margin-bottom: 0;
    margin-top: 0;
    text-align: center;
  }
  .footer-logo-row a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
  .footer-logo-row a .logo-image {
    margin-right: 0;
    margin-bottom: 5px;
  }
  .footer-logo-row a .logo-image img {
    height: auto;
    max-width: 30vw;
  }
  .footer-logo-row a .logo-text {
    font-size: 25px;
  }
  .footer .inner {
    row-gap: 8px;
  }
  .footer .left {
    padding: 0;
  }
  .footer .center {
    padding: 0;
  }
  .footer .right {
    row-gap: 8px;
    padding: 0;
    line-height: 1;
  }
}
@media (max-width: 500px) {
  .fc_form_tml .group .fc_item.block:not(.fc_checkbox) {
    width: 100%;
    margin-bottom: 15px;
  }
  .fc_form_tml .group .fc_item.block:not(.fc_checkbox) label {
    margin-bottom: 7px;
  }
  .singlepage .module_catalog .catalog_order_form form {
    width: 100%;
  }
  .singlepage .module_catalog .catalog_order_form form .group .fc_item .elem_item {
    width: 100%;
  }
  .singlepage .module_catalog .catalog_order_form form .group .fc_item .elem_item input,
  .singlepage .module_catalog .catalog_order_form form .group .fc_item .elem_item textarea {
    width: 100%;
  }
  .singlepage .module_catalog .catalog_order_form form .buttons {
    width: 100%;
  }
  .singlepage .module_catalog .catalog_order_form form .buttons input {
    width: 100%;
  }
}
@media (max-width: 481px) {
  .catalog_block .catalog_menu li .catalog_menu_item {
    width: 100%;
  }
  .catalog_block .catalog_menu li .catalog_menu_item img {
    max-width: 100%;
    height: auto;
  }
  .eshop_block ul.uss_eshop_menu > li > span {
    width: 100%;
  }
  .eshop_block ul.uss_eshop_menu > li > span img {
    max-width: 100%;
    height: auto;
  }
  .uss_shop_block_cat .uss_shop_category .uss_shop_cat_img_wrap {
    max-width: 100% !important;
    height: auto !important;
  }
  .uss_shop_block_cat .uss_shop_category .uss_shop_cat_img_wrap img {
    max-width: 100% !important;
    height: auto !important;
  }
  .photoalbum .uss_one_image {
    max-width: calc((100% - 15px) / 2);
  }
  .photoalbum .uss_one_image .image {
    width: 100%;
  }
  .photoalbum .uss_one_image .image img {
    max-width: 100% !important;
    height: auto !important;
  }
  .uss_catalog_block_cat .uss_catalog_category .uss_catalog_cat_img {
    width: 100%;
  }
  .uss_catalog_block_cat .uss_catalog_category .uss_catalog_cat_img img {
    max-width: 100%;
    height: auto;
  }
  .uss_shop_blocks_view .uss_eshop_item .posimg_item img {
    max-width: 100%;
    height: auto;
  }
  .items .uss_eshop_block_item {
    max-width: calc((100% - 15px) / 2);
  }
}
@media (max-width: 450px) {
  .h_nav_top .inner {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
}
@media (max-width: 425px) {
  .uss_eshop_filters_block {
    padding: 10px;
  }
}
@media (max-width: 420px) {
  .position-slider .slick-track .slick-slide > div > div {
    max-width: calc((400px - 10px) / 2) !important;
  }
}
