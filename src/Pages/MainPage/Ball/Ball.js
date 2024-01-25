import React, { useEffect } from 'react'

const Ball = () => {

    const BallMoving = () => {
        const canvas = document.getElementById("canvas");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;

        const ctx = canvas.getContext("2d");
        let img = new Image();
        img.src = "/images/baseball.png";
        const radius = 200;
        img.onload = () => {
            ctx.drawImage(img, 100, 100, radius, radius);
        }


        class ball {
            constructor(stageWidth, stageHeight, radius, speed) {
                this.radius = radius; // radius = 200
                this.vx = speed;
                this.vy = speed;
                this.x = this.radius + Math.random() * (stageWidth - this.radius * 2);
                this.y = this.radius + Math.random() * (stageHeight - this.radius * 2);
            }

            draw(ctx, canvasWidth, canvasHeight) {
                this.x += this.vx;
                this.y += this.vy;

                this.bounceWindow(canvasWidth, canvasHeight);
                ctx.beginPath();
                ctx.drawImage(img, this.x, this.y, this.radius, this.radius);
                ctx.closePath();
            }

            bounceWindow(stageWidth, stageHeight) {
                if (this.x <= 0 || this.x >= stageWidth - this.radius) {
                    this.vx *= -1;
                    this.x += this.vx;
                }
                if (this.y <= 0 || this.y >= stageHeight - this.radius) {
                    this.vy *= -1;
                    this.y += this.vy;
                }
            }
        }

        let baseball = new ball(document.body.clientWidth, document.body.clientHeight, radius, 5);

        const animate = () => {
            ctx.fillStyle = "#000814";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            baseball.bounceWindow(canvas.width, canvas.height);
            baseball.draw(ctx, canvas.width, canvas.height);

            window.addEventListener("resize", () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                // resize 되는 경우 캔버스 중앙으로 공을 소환하여
                // 캔버스 밖으로 공이 빠져나가지 않도록 설계
                baseball.x = canvas.width * 0.5;
                baseball.y = canvas.height * 0.5;
            });
            requestAnimationFrame(animate);
        }
        animate();
    }

    useEffect(() => { BallMoving() }, []);

    return (
        <canvas id="canvas"></canvas>
    );
}
export default Ball