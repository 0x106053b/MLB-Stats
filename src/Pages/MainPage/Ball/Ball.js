import React, { useEffect } from 'react'
import './Ball.css'

const Ball = () => {
    const BallMoving = () => {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class ball {
            constructor(stageWidth, stageHeight, radius, speed) {
                this.radius = radius;
                this.vx = speed;
                this.vy = speed;
                this.x = this.radius + Math.random() * (stageWidth - this.radius * 2);
                this.y = this.radius + Math.random() * (stageHeight - this.radius * 2);
            }
    
            draw(ctx, color, canvasWidth, canvasHeight) {
                this.x += this.vx;
                this.y += this.vy;
    
                this.bounceWindow(canvasWidth, canvasHeight);

                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.fill();
            }
    
            bounceWindow(stageWidth, stageHeight) {
                if (this.x <= this.radius || this.x >= stageWidth - this.radius) {
                    this.vx *= -1;
                    this.x += this.vx;
                }
                if (this.y <= this.radius || this.y >= stageHeight - this.radius) {
                    this.vy *= -1;
                    this.y += this.vy;
                }
            }
        }

        let ball_ = new ball(document.body.clientWidth, document.body.clientHeight, 100, 7);

        const animate = () => {
            ctx.fillStyle="#000814";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ball_.bounceWindow(canvas.width, canvas.height);
            ball_.draw(ctx, "#ffc300", canvas.width, canvas.height);

            // 화면 크기가 변하면 캔버스 크기를 변경
            window.addEventListener("resize", () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                // resize 되는 경우 캔버스 중앙으로 공을 소환하여
                // 캔버스 밖으로 공이 빠져나가지 않도록 설계
                ball_.x = canvas.width * 0.5;
                ball_.y = canvas.height * 0.5;
            });
            requestAnimationFrame(animate);
        }
        animate();
    }

    useEffect(() => { BallMoving() }, []);

    return(
        <canvas id="canvas"></canvas>
    );
}
export default Ball