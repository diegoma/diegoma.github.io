export interface MenuItem {
  name: string;
  link: string;
}

export interface SocialLink {
  title: string;
  link: string;
  icon: string;
}

export interface ProfileImage {
  src: string;
  alt: string;
}

export interface QuemSouEuData {
  title: string;
  content: string[];
  image: ProfileImage;
}

export interface ExperienciaData {
  title: string;
  content: string[];
}

export interface Habilidade {
  title: string;
}

export interface Curso {
  instituicao: string;
  ano: string;
  titulo: string;
  conteudo: string;
}

export interface Lingua {
  titulo: string;
  nivel: string;
}

export interface Idiomas {
  titulo: string;
  linguas: Lingua[];
}

export interface CursosAvulsos {
  titulo: string;
  cursos: string;
}

export interface EducacaoData {
  title: string;
  cursos: Curso[];
  idiomas: Idiomas;
  cursosAvulsos: CursosAvulsos;
}

export interface Emprego {
  titulo: string;
  periodo: string;
  cargo: string;
  conteudo: string[];
  atividades: string[];
}

export interface CarreiraData {
  title: string;
  empregos: Emprego[];
}
