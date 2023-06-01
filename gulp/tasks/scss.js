import dartSass from "sass";
import gulpSass from "gulp-sass"
import rename from "gulp-rename"

import cleanCss from "gulp-clean-css"// сжатие css файла
//import webpcss from "gulp-webpcss"//вывод WEBP изображений
import autoPrefixer from "gulp-autoprefixer";// добавления вендерных префиксов
import GroupCssMediaQueries from "gulp-group-css-media-queries";

const sass = gulpSass(dartSass)

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sorcemaps: true })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SCSS",
                message: "Error :<%=error.message%>"
            })
        ))
        .pipe(app.plugins.replace(/@img\//g, "../img/"))
        .pipe(sass({
            outputStyle: "expanded"
        }))
        .pipe(GroupCssMediaQueries())
        //.pipe(webpcss({
        //    webClass: ".webp",
        //    noWebpClass: ".no-webp"
        //}))
        .pipe(autoPrefixer({
            grid: "true",
            overrideBrowserslist: ["last 3 versions"],
            cascade: true
        }))
        //Uncomment this line, if you need not compressed css file
        //.pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream())
}