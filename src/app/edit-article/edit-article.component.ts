import { ArticleService } from './../services/article.service';
import { CustomeValidators } from './../common/custom.validators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css'],
})
export class EditArticleComponent implements OnInit {
  selectedFile!: File;
  fd = new FormData();
  selectedArticle: any;

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

  constructor(
    private as: ArticleService,
    private route: Router,
    private ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ar.params.subscribe((url: any) => {
      const id = url.id;
      this.as.getArticleById(id).subscribe((arg: any) => {
        this.selectedArticle = arg;
        console.log(this.selectedArticle);
      });
    });
  }

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

  editArticle(title: HTMLInputElement, content: HTMLTextAreaElement): void {
    const data = {
      title: title.value,
      content: content.value,
    };

    this.as.updateContent(this.selectedArticle._id, data);
  }

  changeImage(): void {}
}
