import { ArticleService } from './../services/article.service';
import { CustomeValidators } from './../common/custom.validators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css'],
})
export class CreateArticleComponent implements OnInit {
  isLoading = false;
  selectedFile!: File;
  fd = new FormData();

  constructor(private as: ArticleService, private route: Router) {}

  form: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(150),
      CustomeValidators.checkSpaceInput,
    ]),
    content: new FormControl('', [
      Validators.required,
      Validators.minLength(100),
      CustomeValidators.checkSpaceInput,
    ]),
  });

  ngOnInit(): void {}

  onFileSelect(event: any): any {
    // tslint:disable-next-line:whitespace
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    // tslint:disable-next-line:whitespace
    this.selectedFile = event.target.files[0] as File;
    this.fd.append('image', this.selectedFile, this.selectedFile.name);
    console.log(this.selectedFile);
  }

  get Title(): any {
    return this.form.get('title');
  }

  get Content(): any {
    return this.form.get('content');
  }

  genrateTags(data: HTMLInputElement): any {
    return data.value.split(' ');
  }

  createArticle(
    title: HTMLInputElement,
    content: HTMLTextAreaElement,
    tags: HTMLInputElement
  ): void {
    this.isLoading = true;
    this.fd.append('title', title.value);
    this.fd.append('content', content.value);
    const tagesArr = this.genrateTags(tags);
    for (const item of tagesArr) {
      this.fd.append('tages', item);
    }

    this.as.createNewArticle(this.fd).this.subscribe(() => {
      this.isLoading = false;
    });
  }
}
