import gulp from "gulp";
import minifyJS from "gulp-uglify";
import babel from "gulp-babel";
import rename from "gulp-rename";

const { src, dest } = gulp;

function modifyJS() {
  return src("src/**/*.js")
    .pipe(babel({ presets: ["@babel/env"] }))
    .pipe(minifyJS())
    .pipe(
      rename(path => {
        path.extname = ".min" + path.extname;
      })
    )
    .pipe(dest("dist"));
}

export { modifyJS };
