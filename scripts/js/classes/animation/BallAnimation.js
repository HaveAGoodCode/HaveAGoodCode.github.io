import Setting from '../setting/Setting.js';
class BallAnimation {
    static remove(animationId) {
        BallAnimation.objs.forEach(obj => obj.classList.remove(animationId));
    }
    static add(animationId) {
        BallAnimation.objs.forEach(obj => obj.classList.add(animationId));
    }
    static jump() {
        BallAnimation.remove(Setting.rollTag);
        BallAnimation.add(Setting.jumpTag);
    }
    static roll() {
        BallAnimation.add(Setting.rollTag);
        BallAnimation.remove(Setting.jumpTag);
    }
    static normal() {
        BallAnimation.remove(Setting.rollTag);
        BallAnimation.remove(Setting.jumpTag);
    }
    static jumpOnce() {
        BallAnimation.jump();
        setTimeout(() => BallAnimation.normal(), (Setting.jumpAnimationOnceMS * 2) + 10);
    }
}
BallAnimation.objs = [document.getElementById(Setting.ballID), document.getElementById(Setting.shadowID)];
export default BallAnimation;
